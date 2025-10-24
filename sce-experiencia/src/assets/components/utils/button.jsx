import "../../../css/buttons.css";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";

const ButtonOption = ({ titulo, icono, ruta, validar }) => { 
// const handleClick = (e) => { 
//   if (onClickHandler) { e.preventDefault(); onClickHandler(); } 
// }; 

return (<Link to={ruta} className="btnsidebar">
  <div className="icono"> 
    <IonIcon icon={icono}></IonIcon> 
  </div> 
{!validar ? <span>{titulo}</span> : null}
  {/* {titulo}  */}
  
  </Link>); 
  }; 
  
  export default ButtonOption;