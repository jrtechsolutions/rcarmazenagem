import { CERTS_COMPLEMENTARES } from "@/lib/site";

export function CertLine() {
  return (
    <p className="cert-line">
      {CERTS_COMPLEMENTARES.map((item, i) => (
        <span key={item.label}>
          {i > 0 ? <span className="cert-sep"> · </span> : null}
          {"tip" in item && item.tip ? (
            <span className="cert-inline has-tip" tabIndex={0}>
              {item.label}
              <span className="cert-tip" role="tooltip">
                {item.tip}
              </span>
            </span>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}
