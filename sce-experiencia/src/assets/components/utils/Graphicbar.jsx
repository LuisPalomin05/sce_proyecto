import "../../../css/Graphicbar.css";
import { IonIcon } from "@ionic/react";
import { storefrontOutline } from "ionicons/icons";

const Graphicbar = ({ Título, importesoles, importedolares }) => {
  return (
    <div className="graphicbar">
      <div className="graphicbar-title">
        <IonIcon icon={storefrontOutline} />
        <p>{Título}</p>
      </div>
      <div className="graphicbar-container">
        <section className="importes-container">
          <div className="importes">
            <p>Total en Soles</p>
            <p>{importesoles}</p>
          </div>
          <div className="importes">
            <p>Total en Dolares</p>
            <p>{importedolares}</p>
          </div>
        </section>
        <section className="leyenda">
          <div className="graphic">
            a
          </div>
        </section>
      </div>
    </div>
  );
};

export default Graphicbar;
