import ButtonOption from "./button";
import CardUsuario from "./utils/cardUsuario";
import "../../css/slidebar.css";

const Sidebar = () => {
<<<<<<< HEAD
    return (
        <div className="slidebar" >
            <nav >pestaña lateral actualizada</nav>
            <ButtonOption titulo={"Inicio"} onClick={()=>alert("Hola")}></ButtonOption>
            <ButtonOption titulo={"Cotizar"}></ButtonOption>
            <ButtonOption titulo={"Compras"}></ButtonOption>
            <ButtonOption titulo={"Ventas"}></ButtonOption>
            <ButtonOption titulo={"Pedidos"}></ButtonOption>
            <ButtonOption titulo={"Gestión Cliente/Proveedor"}></ButtonOption>
          
        </div>
    )
}
export default Sidebar;


=======
  return (
    <div className="slidebar">
      <nav>
        <CardUsuario
          urlImagen={""}
          nombre={"JohnDoe"}
          nombreUsuario={"johndoe"}
        />
      </nav>

      <div>
        <ButtonOption
          titulo={"Inicio"}
          onClick={() => alert("Hola")}
        ></ButtonOption>
        <ButtonOption titulo={"Cotizar"}></ButtonOption>
        <ButtonOption titulo={"Compras"}></ButtonOption>
        <ButtonOption titulo={"Ventas"}></ButtonOption>
        <ButtonOption titulo={"Pedidos"}></ButtonOption>
        <ButtonOption titulo={"Gestión Cliente/Proveedor"}></ButtonOption>
      </div>
    </div>
  );
};
export default Sidebar;
>>>>>>> 4e42f0dbde02f1ee2cb7977bc8f9480234492b20
