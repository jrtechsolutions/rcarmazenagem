import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 sm:px-7">
      <div className="mx-auto max-w-[560px]">
        <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
          404
        </p>
        <h1 className="mt-2 font-display text-[32px] font-extrabold">
          Página não encontrada.
        </h1>
        <p className="mt-3 text-[14.5px] text-mono-ink">
          Essa URL não existe neste site. Volte para a home ou veja a estrutura
          do galpão.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-[9px] bg-verde-escuro px-4 py-2.5 text-[13px] font-semibold text-white"
          >
            Home
          </Link>
          <Link
            href="/estrutura"
            className="rounded-[9px] border border-borda px-4 py-2.5 text-[13px] font-semibold"
          >
            Estrutura
          </Link>
        </div>
      </div>
    </section>
  );
}
