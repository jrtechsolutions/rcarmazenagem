import Link from "next/link";

export function LogoLockup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="RC Armazenagem, página inicial"
    >
      <div className="logo-stage logo-static">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets-visuais/logo-simbolo.png" alt="" />
      </div>
      <b className="wordmark visible">Armazenagem</b>
    </Link>
  );
}
