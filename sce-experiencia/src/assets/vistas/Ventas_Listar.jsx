import "../../css/ventas.css";

import Graphicbar from "../components/utils/Graphicbar";
import ListarConsulta from "./ListarConsulta";

const Ventas_Listar = () => {
  return (
    <div className="VistaVenta">
      <div className="encabezadoVenta">
        <Graphicbar
          Título={"Ventas"}
        />
      </div>
      <ListarConsulta httpTitle="ventas" />
    </div>
  );
};

export default Ventas_Listar;
