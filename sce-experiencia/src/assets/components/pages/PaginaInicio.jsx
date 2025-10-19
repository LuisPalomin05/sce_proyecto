
import "../../../css/paginainicio.css";
import logo from "../../img/torquelogo.jpg";
import Ranking from "../utils/Ranking.jsx"
import RecursosVirtuales from "../utils/RecursosVirtuales.jsx";

const PaginaInicio = () => {
return (
<div className="iniciocuerpo">


<div className="encabezado">
<div className="imageninicio">
 <img className="imagenlogo" src={logo} alt="hola" />
</div>

<div className="reseña">
<p>
"Empresa dedicada a la venta de Pernería Industrial y </p>
<p>elementos de Ferretería. Contamos con más de </p>
<p>10 años activos dentro del mercado nacional..."

</p>
</div>    
</div>

<div className="segundaparte">
<div className="tablasranking"> 
<div className="elemento">
 <Ranking Título={"Cotizaciones más recientes"}/> 
</div> 

<div className="elemento">
<Ranking Título={"Productos más vendidos del 2025-III"}/> 
</div> 


</div>
<div className="recursos">
<RecursosVirtuales />
</div>
</div>

</div>



);

};

export default PaginaInicio;