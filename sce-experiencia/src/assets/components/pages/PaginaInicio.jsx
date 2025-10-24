import "../../../css/paginainicio.css";
import logo from "../../img/torquelogo.jpg";
import Ranking from "../utils/Ranking.jsx";


const PaginaInicio = () => {
  return (
    <div className="iniciocuerpo">
      

      <div className="segundaparte">
        <div className="tablasranking">
          <div className="elemento">
            <Ranking Título={"Cotizaciones más recientes"} />
          </div>

          <div className="elemento">
            <Ranking Título={"Productos más vendidos del 2025-III"} />
          </div>
        </div>
        <div className="recursos">
         
        </div>
      </div>
    </div>
  );
};

export default PaginaInicio;