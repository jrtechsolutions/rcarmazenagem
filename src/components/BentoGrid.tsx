import Link from "next/link";
import { PhotoFrame } from "@/components/PhotoFrame";
import { FOTOS_ESTRUTURA } from "@/lib/site";

type Props = {
  href?: string;
  size?: "lg";
};

export function BentoGrid({ href, size }: Props) {
  const [fachada, corredor, expedicao] = FOTOS_ESTRUTURA;
  const inner = (
    <div className={`bento ${size === "lg" ? "bento-lg" : ""}`}>
      <PhotoFrame
        src={fachada.src}
        alt={fachada.alt}
        label={fachada.label}
        className="bento-main"
      />
      <div className="bento-side-col">
        <PhotoFrame
          src={corredor.src}
          alt={corredor.alt}
          label={corredor.label}
          className="bento-side"
        />
        <PhotoFrame
          src={expedicao.src}
          alt={expedicao.alt}
          label={expedicao.label}
          className="bento-side"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    );
  }

  return inner;
}
