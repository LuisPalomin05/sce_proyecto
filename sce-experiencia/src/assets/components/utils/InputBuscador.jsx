import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

const InputBuscador = ({ placeholder, onChange, value }) => {
  return (
    <div className="InputBuscador">
      <IonIcon className="icono-buscador" icon={searchOutline} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      
    </div>
  );
};

export default InputBuscador;
