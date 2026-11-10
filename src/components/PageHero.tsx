type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="page-hero-simple">
      <div className="shell">
        <p className="page-hero-simple__eyebrow">{eyebrow}</p>
        <h1 className="page-hero-simple__title">{title}</h1>
        {description ? (
          <p className="page-hero-simple__lead">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
