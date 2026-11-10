import Image from "next/image";
import type { ReactNode } from "react";
import { ParallaxMedia } from "@/components/ParallaxMedia";

type Props = {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Viewport height fraction, e.g. 0.85 → 85vh */
  height?: number;
  cover?: number;
};

/** Full-bleed image band with strong scroll parallax (FlySP fixed-bg feel). */
export function ScrollScene({
  image,
  eyebrow,
  title,
  description,
  children,
  height = 0.85,
  cover = 1.45,
}: Props) {
  return (
    <section
      className="scroll-scene"
      style={{ minHeight: `${Math.round(height * 100)}vh` }}
    >
      <div className="scroll-scene__media" aria-hidden>
        <ParallaxMedia cover={cover} className="scroll-scene__parallax">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className="scroll-scene__img"
            priority={false}
          />
        </ParallaxMedia>
        <span className="scroll-scene__shade" />
      </div>
      <div className="shell scroll-scene__content">
        {eyebrow ? <p className="scroll-scene__eyebrow">{eyebrow}</p> : null}
        <h2 className="scroll-scene__title">{title}</h2>
        {description ? (
          <p className="scroll-scene__lead">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
