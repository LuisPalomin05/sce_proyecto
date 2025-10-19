
import "../../../css/paginainicio.css";
import logo from "../../img/torquelogo.jpg";
import Ranking from "../utils/Ranking.jsx"


const PaginaInicio = () => {
return (
<div className="cuerpo">

<img className="imagenlogo" src={logo} alt="hola" />
<Ranking Título={"Ventas"}/> 







</div>

);

};

export default PaginaInicio;