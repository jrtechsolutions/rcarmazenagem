import Link from "next/link";
import { RevealSection } from "@/components/RevealSection";

type Props = {
  title: string;
  cta: string;
  href: string;
  external?: boolean;
};

export function CtaBand({ title, cta, href, external }: Props) {
  const className =
    "btn rounded-[9px] bg-ambar px-[18px] py-[11px] text-[13px] font-semibold whitespace-nowrap";

  return (
    <RevealSection>
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-[#CFE3D5] bg-[linear-gradient(120deg,#E7EFEA,#fff)] px-[26px] py-[22px]">
          <b className="font-display text-[16px] font-bold">{title}</b>
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
