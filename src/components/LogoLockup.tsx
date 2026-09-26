import Link from "next/link";

export function LogoLockup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="RC Armazém: página inicial"
    >
      <div className="logo-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets-visuais/logo-simbolo.png" alt="" />
      </div>
      <b className="wordmark">Armazém</b>
    </Link>
  );
}
