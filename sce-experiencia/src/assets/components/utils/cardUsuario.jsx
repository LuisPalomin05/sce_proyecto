import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { caretDownOutline,caretBackOutline } from "ionicons/icons";



const CardUsuario = ({ urlImagen, nombre, nombreUsuario }) => {
  const [iconSpan, setIconSpan] = useState(caretDownOutline);




  const handlerIconClick = () => {
    setIconSpan(iconSpan === caretDownOutline ? caretBackOutline : caretDownOutline);
  };
 
  function ramdomColor() {
  // const colors = ['#dd401dff', '#44c75cff', '#3854ceff', '#be53c5ff', '#2ecac2ff',
  //   '#dd1d37ff', '#8b33ffff', '#339cffff', '#ffbe33ff', '#ff8f33ff'
  // ];
  // return colors[Math.floor(Math.random() * colors.length)];
console.log("ramdomColor");
}

  return (
    <div className="card-usuario">
      <div className="card-info">
        {urlImagen ? 
        (      <img src={urlImagen} />) 
        : 
        (    <div className={`charUsuario`} style={{ backgroundColor: ramdomColor(), color: "white" }}><p>{
            nombre.charAt(0)
            }</p></div>)}
  
    
        <div className="info-usuario">
          <p>{nombre}</p>
          <p>{nombreUsuario}</p>
        </div>
      </div>
      <div className="icon-span">
      <IonIcon icon={iconSpan}  onClick={handlerIconClick} />

      </div>
    </div>
  );
};

export default CardUsuario;
