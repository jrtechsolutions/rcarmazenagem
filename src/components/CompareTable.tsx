import { IconCheck, IconClose } from "@/components/Icons";
import { COMPARACAO } from "@/lib/site";

export function CompareTable() {
  return (
    <div className="comp-table">
      <div className="comp-row head">
        <div className="comp-cell label">&nbsp;</div>
        <div className="comp-cell">Contratando separado</div>
        <div className="comp-cell">Com a RC</div>
      </div>
      {COMPARACAO.map((row) => (
        <div key={row.label} className="comp-row">
          <div className="comp-cell label">{row.label}</div>
          <div className="comp-cell no">
            {row.icons ? <IconClose /> : null}
            {row.no}
          </div>
          <div className="comp-cell yes">
            {row.icons ? <IconCheck /> : null}
            {row.yes}
          </div>
        </div>
      ))}
    </div>
  );
}
