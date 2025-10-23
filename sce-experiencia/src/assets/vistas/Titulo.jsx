//como importar css: defines un import con su ruta
import "./estiloTitulo.css";
//importar una imagen
import torquelogo from "../img/torquelogo.jpg";
import fondo from "../img/fondo.jpg";
//usar dependencias y otras funciones como componentes y codigo externo
import { useState } from "react"; //-> hook


//como crear un componente mediante constantes o funciones
// function name(params) {html}
// const micomponente = ({params})=>{ return(html)}
  

const Titulo = ({ numeracion }) => {

  //uso de estados; algo asi como los tipicos getters y setters
  const [miNombre, setMiNombre] = useState("");
  const [ miEdad,setMiEdad] = useState(0);

  return (
    <div className="TituloDiseño">
      <div className="cartilla">

      <input type="text" onChange={(valor) =>{setMiNombre(valor.target.value)}} value={miNombre}  />
        
        <div>{miNombre}</div>

        <input type="number" onChange={(num) => {setMiEdad(num.target.value)}} value={miEdad} />
        <p> edad : {miEdad}</p>
      </div>
    </div>
  );
};

export default Titulo;
