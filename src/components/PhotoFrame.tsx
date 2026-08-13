type Props = {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
};

export function PhotoFrame({ src, alt, className = "", label }: Props) {
  if (!src) {
    return (
      <div
        className={`ph-stripes ph-ortho flex items-center justify-center font-mono text-[11px] text-mono-ink ${className}`}
      >
        {label ?? alt}
      </div>
    );
  }

  return (
    <div className={`ph-ortho overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
