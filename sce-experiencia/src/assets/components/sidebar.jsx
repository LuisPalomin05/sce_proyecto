import ButtonOption from "./button";
import "../../css/slidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <h2>pestaña lateral actualizada</h2>
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