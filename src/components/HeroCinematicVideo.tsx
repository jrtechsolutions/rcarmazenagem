"use client";

type Props = {
  src?: string;
  poster?: string;
  /** Versão vertical (9:16) servida abaixo de 768px. */
  mobile?: { src: string; poster: string };
};

const MOBILE_MEDIA = "(max-width: 767px)";

export function HeroCinematicVideo({
  src = "/assets-visuais/hero-cinematic.mp4",
  poster = "/assets-visuais/hero-cinematic-poster.jpg",
  mobile,
}: Props) {
  return (
    <div className="hero-cinematic__media" aria-hidden>
      {mobile ? (
        <picture>
          <source media={MOBILE_MEDIA} srcSet={mobile.poster} />
          <img src={poster} alt="" className="hero-cinematic__poster" />
        </picture>
      ) : null}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={mobile ? undefined : poster}
        className="hero-cinematic__video"
      >
        {mobile ? (
          <source media={MOBILE_MEDIA} src={mobile.src} type="video/mp4" />
        ) : null}
        <source src={src} type="video/mp4" />
      </video>
      <div className="hero-cinematic__shade" />
    </div>
  );
}
