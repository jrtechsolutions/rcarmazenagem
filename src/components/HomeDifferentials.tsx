const DIFFS = [
  {
    title: "WMS Senior",
    text: "Rastreio por lote, posição e validade em tempo de operação.",
  },
  {
    title: "Compliance",
    text: "Licenças vigentes e processo documentado ponta a ponta.",
  },
  {
    title: "Um grupo",
    text: "Armazém e Transportes sob o mesmo padrão documental.",
  },
  {
    title: "Segregação",
    text: "Cada classe de produto com zona e regra próprias no galpão.",
  },
] as const;

export function HomeDifferentials() {
  return (
    <ul className="home-diffs">
      {DIFFS.map((item, i) => (
        <li key={item.title} className="home-diffs__card reveal-child">
          <span className="home-diffs__num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
