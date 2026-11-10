import Link from "next/link";

export type ServiceCardItem = {
  title: string;
  text: string;
  href?: string;
  cta?: string;
};

type Props = {
  items: readonly ServiceCardItem[];
  columns?: 2 | 3;
};

export function ServiceCards({ items, columns = 3 }: Props) {
  return (
    <ul
      className={`service-cards service-cards--cols-${columns}`}
      data-cols={columns}
    >
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`service-cards__item tone-${(i % 3) + 1} reveal-child`}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.href ? (
            <Link href={item.href} className="service-cards__link">
              {item.cta ?? "Saber mais →"}
            </Link>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
