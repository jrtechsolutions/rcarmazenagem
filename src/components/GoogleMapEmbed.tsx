import { mapsEmbedSrc, mapsOpenUrl } from "@/lib/maps";

type Props = {
  label: string;
  query: string;
  zoom: number;
  tall?: boolean;
  bare?: boolean;
};

export function GoogleMapEmbed({ label, query, zoom, tall, bare }: Props) {
  return (
    <div className={tall ? "gmap-card gmap-card-tall" : "gmap-card"}>
      <div className="gmap-frame">
        <iframe
          title={`Google Maps: ${label}`}
          src={mapsEmbedSrc(query, zoom)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {!bare ? (
        <div className="gmap-meta">
          <strong>{label}</strong>
          <a
            href={mapsOpenUrl(query)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
      ) : null}
    </div>
  );
}
