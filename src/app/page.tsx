import Link from "next/link";
import { CrossLink } from "@/components/CrossLink";
import { PhotoFrame } from "@/components/PhotoFrame";
import { RackMotif } from "@/components/RackMotif";
import { SegmentIcon } from "@/components/Icons";
import {
  BENEFICIOS,
  CERTS_COMPLETAS,
  COMPLIANCE_DESTAQUE,
  FAQ,
  NUMEROS,
  PASSOS,
  SEGMENTOS,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="bg-[linear-gradient(160deg,#E9F2ED,#fff_65%)]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-6 px-4 py-12 sm:px-7 lg:grid-cols-2 lg:gap-6 lg:py-[54px]">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              Armazenagem regulada
            </p>
            <h1 className="mt-2 max-w-[440px] font-display text-[clamp(27px,3.6vw,40px)] font-extrabold leading-[1.12] text-texto">
              Guardamos e levamos sua carga até o destino final.
            </h1>
            <p className="mt-3.5 max-w-[400px] text-[14.5px] text-mono-ink">
              Do recebimento à entrega, um único fornecedor cuida de tudo — sem
              repasse entre empresas diferentes.
            </p>
            <Link
              href="/estrutura"
              className="mt-[22px] inline-block rounded-[9px] bg-verde-escuro px-[22px] py-3 text-[13.5px] font-semibold text-white"
            >
              Conhecer estrutura
            </Link>
          </div>

          <div className="clip-ortho h-[220px] sm:h-[240px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets-visuais/hero-armazenagem-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/assets-visuais/hero-armazenagem.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <CrossLink />

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Números
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {NUMEROS.map((n) => (
              <div
                key={n.label}
                className="rounded-[12px] border border-borda bg-card p-4 text-center"
              >
                <b className="font-mono text-[22px] font-medium text-verde-escuro">
                  {n.valor}
                </b>
                <span className="mt-1 block text-[11.5px] text-mono-ink">
                  {n.label}
                </span>
                {n.pendente ? (
                  <span className="mt-2 inline-block rounded-[8px] border border-dashed border-borda px-2 py-0.5 font-mono text-[10px] text-mono-ink">
                    pendente de confirmação
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[42px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Como funciona
          </h2>
          <p className="mt-2 max-w-xl text-[14px] text-mono-ink">
            Três etapas, um mesmo responsável do início ao fim.
          </p>
          <div className="mt-[18px] grid items-center gap-[30px] lg:grid-cols-[0.9fr_1.1fr]">
            <RackMotif labeled />
            <div className="flex flex-col gap-3.5">
              {PASSOS.map((p) => (
                <div key={p.n} className="flex items-start gap-3">
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-verde font-mono text-[12px] font-semibold text-white">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-semibold">{p.titulo}</h3>
                    <p className="text-[12px] text-mono-ink">{p.texto}</p>
                  </div>
                </div>
              ))}
              <Link
                href="/como-funciona"
                className="mt-1 text-[13px] font-semibold text-verde-escuro"
              >
                Ver o fluxo completo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Por que escolher a RC Armazenagem
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFICIOS.map((b) => (
              <article
                key={b.titulo}
                className="rounded-[12px] border border-borda bg-card p-4"
              >
                <SegmentIcon
                  name={b.icon}
                  className="mb-3 h-6 w-6 text-verde"
                />
                <h3 className="text-[14px] font-semibold">{b.titulo}</h3>
                <p className="mt-1 text-[13px] text-mono-ink">{b.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-2 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Segmentos
          </h2>
          <p className="mb-4 max-w-xl text-[14px] text-mono-ink">
            Cosméticos · Saneantes · Correlatos · Químicos · Medicamentos
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SEGMENTOS.map((s) => (
              <div
                key={s.id}
                className="rounded-[10px] border border-borda bg-card px-2.5 py-3.5 text-center text-[12px] font-medium"
              >
                <SegmentIcon
                  name={s.icon}
                  className="mx-auto mb-2 block h-6 w-6 text-verde"
                />
                {s.nome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-2 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Compliance
          </h2>
          <p className="mb-4 max-w-xl text-[14px] text-mono-ink">
            Guardar produto controlado exige mais que espaço. Exige processo.
          </p>
          <div className="mb-3 flex flex-wrap gap-3.5">
            {COMPLIANCE_DESTAQUE.map((c) => (
              <span
                key={c.titulo}
                className="rounded-[8px] border border-borda bg-[#EEF3F8] px-[13px] py-[9px] font-mono text-[11px] text-azul-escuro"
              >
                {c.titulo}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTS_COMPLETAS.map((n) => (
              <span
                key={n}
                className="rounded-[8px] border border-borda bg-card px-2.5 py-1.5 font-mono text-[10.5px] text-mono-ink"
              >
                {n}
              </span>
            ))}
          </div>
          <Link
            href="/compliance"
            className="mt-4 inline-block text-[13px] font-semibold text-verde-escuro"
          >
            Ver certificações →
          </Link>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            FAQ
          </h2>
          <div className="divide-y divide-borda border-y border-borda">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-3.5">
                <summary className="cursor-pointer list-none text-[14px] font-semibold marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="font-mono text-[12px] text-mono-ink group-open:hidden">
                      +
                    </span>
                    <span className="hidden font-mono text-[12px] text-mono-ink group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-2 max-w-[640px] text-[13.5px] text-mono-ink">
                  {item.a}
                  {item.pendente ? (
                    <span className="mt-2 block font-mono text-[10.5px] text-mono-ink">
                      Resposta pendente de confirmação com o cliente.
                    </span>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Depoimentos
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-[12px] border border-dashed border-borda bg-card p-5"
              >
                <p className="font-mono text-[12px] text-mono-ink">
                  Depoimento em breve
                </p>
                <p className="mt-2 text-[13px] text-mono-ink">
                  Estrutura pronta para depoimento real de cliente. Não
                  inventamos quote.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-[38px] sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-3 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Estrutura
          </h2>
          <Link href="/estrutura" className="block">
            <PhotoFrame
              alt="Foto real do galpão"
              label="[ foto real do galpão ]"
              className="h-[190px]"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
