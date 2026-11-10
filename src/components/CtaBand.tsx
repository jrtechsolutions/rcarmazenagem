import Link from "next/link";
import { RevealSection } from "@/components/RevealSection";

type Props = {
  title: string;
  cta: string;
  href: string;
  external?: boolean;
  description?: string;
};

export function CtaBand({ title, cta, href, external, description }: Props) {
  const className = "btn-pill btn-pill--solid";

  return (
    <RevealSection>
      <div className="shell">
        <div className="cta-band-fly">
          <div>
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
          </div>
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {cta}
            </a>
          ) : (
            <Link href={href} className={className}>
              {cta}
            </Link>
          )}
        </div>
      </div>
    </RevealSection>
  );
}
