import ButtonOption from "./button";
import CardUsuario from "./utils/cardUsuario";
import "../../css/slidebar.css";

const Sidebar = () => {

  return (
    <div className="slidebar">
      <nav className="nav-user">
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
