import Image from "next/image";
import { ParallaxMedia } from "@/components/ParallaxMedia";
import { FOTOS_GALPAO } from "@/lib/site";

const CARE_PILLARS = [
  {
    title: "Armazenagem estratégica",
    text: "Posição por classe, FEFO e documentação pronta para auditoria.",
  },
  {
    title: "Manuseio especializado",
    text: "Separação, etiquetagem, paletização e inventário no mesmo padrão.",
  },
  {
    title: "Transporte integrado",
    text: "Saída na frota RC ou na transportadora indicada, sem quebrar a cadeia.",
  },
] as const;

export function HomeCare() {
  return (
    <div className="home-care">
      <div className="home-care__media">
        <ParallaxMedia cover={1.4} className="home-care__frame">
          <Image
            src={FOTOS_GALPAO.estocagem.src}
            alt={FOTOS_GALPAO.estocagem.alt}
            width={900}
            height={700}
            className="home-care__img"
          />
        </ParallaxMedia>
      </div>
      <div className="home-care__copy">
        <p className="sec-label">Manuseio</p>
        <h2 className="sec-title">
          Cuidado especializado no manuseio da sua carga
        </h2>
        <p className="home-care__lead">
          Cada etapa do galpão segue processo próprio para produto regulado:
          conferência na entrada, posição correta e saída documentada.
        </p>
        <ul className="home-care__list">
          {CARE_PILLARS.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
