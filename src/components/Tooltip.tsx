type Props = {
  term: string;
  tip: string;
};

/** Tooltip técnico (.tt-wrap / .tt-box). */
export function Tooltip({ term, tip }: Props) {
  return (
    <span className="tt-wrap">
      <span className="tt-trigger" tabIndex={0}>
        {term}
      </span>
      <span className="tt-box" role="tooltip">
        {tip}
      </span>
    </span>
  );
}
