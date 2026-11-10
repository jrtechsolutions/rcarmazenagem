import Image from "next/image";
import type { ReactNode } from "react";
import { ParallaxMedia } from "@/components/ParallaxMedia";
import { RevealSection } from "@/components/RevealSection";

type Props = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: { src: string; alt: string };
  reverse?: boolean;
  altBg?: boolean;
  footer?: ReactNode;
  /** Parallax oversize factor (FlySP-like scroll inside the frame). */
  cover?: number;
};

export function SplitMedia({
  eyebrow,
  title,
  children,
  image,
  reverse,
  altBg,
  footer,
  cover = 1.45,
}: Props) {
  return (
    <RevealSection alt={altBg} className="sec-compact">
      <div className="shell">
        <div
          className={`split-media${reverse ? " split-media--reverse" : ""}`}
        >
          <div className="split-media__copy reveal-child">
            {eyebrow ? <p className="sec-label">{eyebrow}</p> : null}
            <h2 className="sec-title split-media__title">{title}</h2>
            <div className="split-media__body">{children}</div>
            {footer}
          </div>
          <div className="split-media__media reveal-child">
            <ParallaxMedia cover={cover} className="split-media__frame">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={680}
                className="split-media__img"
                sizes="(max-width: 860px) 100vw, 50vw"
                priority={false}
              />
            </ParallaxMedia>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
