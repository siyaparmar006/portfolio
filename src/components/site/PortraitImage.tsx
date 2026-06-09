const portraitUrl = "/assets/brand/portrait.jpg?v=2";

export function PortraitImage({ alt, className }: { alt: string; className?: string }) {
  return <img src={portraitUrl} alt={alt} className={className} />;
}
