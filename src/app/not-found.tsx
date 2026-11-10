import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero-simple">
      <div className="shell max-w-[640px]">
        <p className="page-hero-simple__eyebrow">404</p>
        <h1 className="page-hero-simple__title">Página não encontrada.</h1>
        <p className="page-hero-simple__lead">
          Essa URL não existe neste site. Volte para a home ou veja a estrutura
          do galpão.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/" className="btn-pill btn-pill--solid">
            Home
          </Link>
          <Link href="/estrutura" className="btn-pill btn-pill--outline-dark">
            Estrutura
          </Link>
        </div>
      </div>
    </section>
  );
}
