type Item = {
  year: string;
  title: string;
  text: string;
};

type Props = {
  items: readonly Item[];
};

export function Timeline({ items }: Props) {
  return (
    <ol className="fly-timeline">
      {items.map((item) => (
        <li key={item.year} className="fly-timeline__item reveal-child">
          <span className="fly-timeline__year">{item.year}</span>
          <div className="fly-timeline__card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
