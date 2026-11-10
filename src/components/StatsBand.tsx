type Stat = {
  value: string;
  label: string;
  hint?: string;
};

type Props = {
  items: readonly Stat[];
  className?: string;
};

export function StatsBand({ items, className = "" }: Props) {
  return (
    <div className={`stats-band ${className}`.trim()}>
      {items.map((item) => (
        <article key={item.label} className="stats-band__card">
          <strong className="stats-band__value">{item.value}</strong>
          <span className="stats-band__label">{item.label}</span>
          {item.hint ? (
            <p className="stats-band__hint">{item.hint}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
