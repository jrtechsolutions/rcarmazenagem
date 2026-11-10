import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ParallaxMedia } from "@/components/ParallaxMedia";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
  crumbs?: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
};

export function PageHeroMedia({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  children,
  align = "left",
}: Props) {
  return (
    <section
      id="hero"
      className={`page-hero-media page-hero-media--${align}`}
    >
      <div className="page-hero-media__bg" aria-hidden>
        <ParallaxMedia cover={1.45} className="page-hero-media__parallax">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxMedia>
        <span className="page-hero-media__shade" />
      </div>
      <div className="shell page-hero-media__content">
        {crumbs?.length ? (
          <nav className="page-hero-media__crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="page-hero-media__crumb">
                {i > 0 ? <span aria-hidden>›</span> : null}
                {c.href ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <p className="page-hero-media__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero-media__title">{title}</h1>
        {description ? (
          <p className="page-hero-media__lead">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
