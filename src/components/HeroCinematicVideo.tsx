"use client";

export function HeroCinematicVideo() {
  return (
    <div className="hero-cinematic__media" aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets-visuais/hero-cinematic-poster.jpg"
        className="hero-cinematic__video"
      >
        <source
          src="/assets-visuais/hero-cinematic.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-cinematic__shade" />
    </div>
  );
}
