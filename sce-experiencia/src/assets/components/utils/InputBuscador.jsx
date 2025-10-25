import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import "../../../css/Inicio.css";

const InputBuscador = ({ placeholder, onSearch }) => {
  const [valor, setValor] = useState("");

  // Detectar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(valor);
    }
  };

  // Detectar clic en el icono de búsqueda (opcional)
  const handleIconClick = () => {
    onSearch(valor);
  };

  return (
    <div className="input-buscador">
      <IonIcon
        icon={searchOutline}
        className="search-icon"
        onClick={handleIconClick}
        style={{ cursor: "pointer" }}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputBuscador;


