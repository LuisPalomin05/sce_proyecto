import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import "../../../css/Inicio.css";


const InputBuscador = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-buscador">
      <IonIcon icon={searchOutline} className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBuscador;

