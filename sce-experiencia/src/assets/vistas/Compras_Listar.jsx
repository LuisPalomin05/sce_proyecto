
import "../../css/ventas.css";

import Graphicbar from "../components/utils/Graphicbar";
import ListarConsulta from "./ListarConsulta";


const Compras_Listar = () => {
  

  return (
    <div className="VistaVenta">
      <div className="encabezadoVenta">
        <Graphicbar
          Título={"Compras"}
          importesoles={1700}
          importedolares={2300}
        />
      </div>

   

      <ListarConsulta httpTitle="compras" />
    </div>
  );
};

export default Compras_Listar;
