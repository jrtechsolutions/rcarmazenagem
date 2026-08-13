import Link from "next/link";

type Props = {
  title: string;
  cta: string;
  href: string;
  external?: boolean;
};

export function CtaBand({ title, cta, href, external }: Props) {
  const className =
    "rounded-[9px] bg-verde-escuro px-[18px] py-[11px] text-[13px] font-semibold whitespace-nowrap text-white";

  return (
    <div className="px-4 pb-8 sm:px-7">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 rounded-[14px] border border-[#CFE3D5] bg-[linear-gradient(120deg,#E7EFEA,#fff)] px-[26px] py-[22px]">
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
  );
}
