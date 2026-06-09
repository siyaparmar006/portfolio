#!/usr/bin/env python3
"""Extract JPEG spreads from NNP PDFs into public/assets/projects/{slug}/."""

from __future__ import annotations

import os
import subprocess
from pathlib import Path

import Quartz
from Foundation import NSURL

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "projects"
PROJECTS = Path("/Users/siya/Desktop/Projects")

JOBS = [
    ("nnp-volunteer-handbook", "NNP VOLUNTEER HANDBOOK", "Volunteer Handbook PDF (Booklet Version) (2).pdf", 14),
    ("nnp-impact-report", "NNP IMPACT REPORT", "NNP 2025 Impact Report PDF (Booklet).pdf", 16),
    ("nnp-cultural-primer", "NNP CULTURAL PRIMER", "NNP Cultural Primer - GUINEA (1).pdf", 10),
    ("nnp-referral-guidelines", "NNP REFERRAL GUIDELINES", "Referral Guidelines NNP 2025-2.pdf", 14),
    ("nnp-brochure", "NNP BROCHURE", "NNP Program Brochure 2026.pdf", 12),
    ("nnp-branding", "NNP BRANDING & STYLE GUIDE", "Brand Style Guide (3).pdf", 12),
    ("nnp-social-media", "NNP SOCIAL MEDIA", "2025 Branded Instagram Story Templates.pdf", 10),
]

DPI = 144


def render_page(pdf_path: str, page_index: int, out_path: Path) -> None:
    url = NSURL.fileURLWithPath_(pdf_path)
    doc = Quartz.CGPDFDocumentCreateWithURL(url)
    if not doc:
        raise RuntimeError(f"Could not open PDF: {pdf_path}")

    page = Quartz.CGPDFDocumentGetPage(doc, page_index)
    if not page:
        raise RuntimeError(f"Missing page {page_index} in {pdf_path}")

    media = Quartz.CGPDFPageGetBoxRect(page, Quartz.kCGPDFMediaBox)
    width = int(media.size.width * DPI / 72)
    height = int(media.size.height * DPI / 72)

    color_space = Quartz.CGColorSpaceCreateDeviceRGB()
    ctx = Quartz.CGBitmapContextCreate(
        None,
        width,
        height,
        8,
        width * 4,
        color_space,
        Quartz.kCGImageAlphaPremultipliedLast,
    )
    Quartz.CGContextSetRGBFillColor(ctx, 1, 1, 1, 1)
    Quartz.CGContextFillRect(ctx, Quartz.CGRectMake(0, 0, width, height))
    Quartz.CGContextSaveGState(ctx)
    Quartz.CGContextScaleCTM(ctx, DPI / 72, DPI / 72)
    Quartz.CGContextDrawPDFPage(ctx, page)
    Quartz.CGContextRestoreGState(ctx)

    image = Quartz.CGBitmapContextCreateImage(ctx)
    dest = Quartz.CGImageDestinationCreateWithURL(
        NSURL.fileURLWithPath_(str(out_path)),
        "public.jpeg",
        1,
        None,
    )
    Quartz.CGImageDestinationAddImage(dest, image, None)
    Quartz.CGImageDestinationFinalize(dest)


def optimize(path: Path) -> None:
    subprocess.run(
        ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "80", str(path), "--out", str(path)],
        check=True,
        capture_output=True,
    )


def extract_job(slug: str, folder: str, pdf_name: str, max_pages: int) -> None:
    pdf_path = PROJECTS / folder / pdf_name
    if not pdf_path.exists():
        raise FileNotFoundError(pdf_path)

    out_dir = OUT / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    url = NSURL.fileURLWithPath_(str(pdf_path))
    doc = Quartz.CGPDFDocumentCreateWithURL(url)
    total = Quartz.CGPDFDocumentGetNumberOfPages(doc)
    pages = min(max_pages, total)

    for i in range(1, pages + 1):
        out = out_dir / f"gallery-{i:02d}.jpg"
        render_page(str(pdf_path), i, out)
        optimize(out)

    cover = out_dir / "cover.jpg"
    hero = out_dir / "hero-cover.jpg"
    render_page(str(pdf_path), 1, cover)
    render_page(str(pdf_path), 1, hero)
    optimize(cover)
    optimize(hero)

    print(f"{slug}: {pages} pages from {pdf_name}")


def main() -> None:
    for job in JOBS:
        extract_job(*job)

    # Hub hero from brand style guide cover
    brand_pdf = PROJECTS / "NNP BRANDING & STYLE GUIDE" / "Brand Style Guide (3).pdf"
    hub_dir = OUT / "nnp"
    hub_dir.mkdir(parents=True, exist_ok=True)
    hero = hub_dir / "hero-cover.jpg"
    cover = hub_dir / "cover.jpg"
    render_page(str(brand_pdf), 1, hero)
    render_page(str(brand_pdf), 1, cover)
    optimize(hero)
    optimize(cover)
    print("nnp: hub cover from brand style guide")


if __name__ == "__main__":
    main()
