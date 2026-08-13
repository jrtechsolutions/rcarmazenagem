type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-borda bg-white px-4 pt-[42px] pb-8 sm:px-7">
      <div className="mx-auto max-w-[1120px]">
        <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-[560px] font-display text-[clamp(24px,3vw,33px)] font-extrabold leading-[1.12] text-texto">
          {title}
        </h1>
        {description ? (
          <p className="mt-2.5 max-w-[520px] text-[14px] text-mono-ink">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
