"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProjectCover } from "@/content/projects";
import { nnpHubIntro } from "@/content/nnp-hub";
import { NnpDeliverablesIndex } from "@/components/site/NnpDeliverablesIndex";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export function NnpHubPage() {
  const hero = getProjectCover("nnp");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />

      <article className="mx-auto max-w-7xl px-5 pt-28 pb-12 md:px-8 md:pt-32">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <header className="max-w-3xl">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-primary uppercase">
            {nnpHubIntro.label}
          </span>
          <h1 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight uppercase md:text-5xl lg:text-6xl">
            {nnpHubIntro.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
            {nnpHubIntro.description}
          </p>
        </header>

        <dl className="mt-10 grid gap-x-8 gap-y-6 border-y border-border py-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-semibold">Year :</dt>
            <dd className="mt-2 text-sm text-primary">{nnpHubIntro.year}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-semibold">Role :</dt>
            <dd className="mt-2 text-sm text-primary">{nnpHubIntro.role}</dd>
          </div>
        </dl>

        {hero && (
          <figure className="mt-10">
            <img
              src={hero}
              alt={`${nnpHubIntro.title} — overview`}
              className="w-full rounded-2xl shadow-soft ring-1 ring-border md:rounded-[1.75rem]"
            />
          </figure>
        )}

        <NnpDeliverablesIndex />
      </article>

      <Footer />
    </div>
  );
}
