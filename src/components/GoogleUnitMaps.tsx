import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { ENDERECOS } from "@/lib/site";

export function GoogleUnitMaps() {
  const sp = ENDERECOS[0];
  const jundiai = ENDERECOS.slice(1);

  return (
    <div className="gmap-units">
      <div className="gmap-block">
        <span className="gmap-block-label">São Paulo · 1 unidade</span>
        <GoogleMapEmbed
          label={sp.mapLabel}
          query={sp.mapQuery}
          zoom={sp.zoom}
          tall
        />
        <div className="unit-item unit-item--plain">
          <h3>{sp.cidade}</h3>
          <p>
            {sp.logradouro}
            <br />
            CEP {sp.cep}
          </p>
        </div>
      </div>

      <div className="gmap-block">
        <span className="gmap-block-label">Jundiaí · 3 unidades</span>
        <div className="gmap-jd-grid">
          {jundiai.map((u) => (
            <div key={u.mapQuery} className="gmap-jd-item">
              <GoogleMapEmbed
                label={u.mapLabel}
                query={u.mapQuery}
                zoom={u.zoom}
              />
              <div className="unit-item unit-item--plain">
                <h3>
                  {u.cidade}
                  {u.extra ? `: ${u.extra}` : ""}
                </h3>
                <p>
                  {u.logradouro}
                  <br />
                  CEP {u.cep}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
