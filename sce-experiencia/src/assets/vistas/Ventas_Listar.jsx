import "../../css/ventas.css";

import Graphicbar from "../components/utils/Graphicbar";
import ListarConsulta from "./ListarConsulta";

const Ventas_Listar = () => {
  return (
    <div className="VistaVenta">
      <div className="encabezadoVenta">
        <Graphicbar
          Título={"Ventas"}
          importesoles={100}
          importedolares={5000}
        />
      </div>
      <ListarConsulta httpTitle="ventas" />
    </div>
  );
};

export default Ventas_Listar;
