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
        <img
          className="logo-stage__symbol"
          src="/assets-visuais/logo-simbolo.png"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="logo-stage__full"
          src="/assets-visuais/logo-completo.png"
          alt=""
        />
      </div>
    </Link>
  );
}
