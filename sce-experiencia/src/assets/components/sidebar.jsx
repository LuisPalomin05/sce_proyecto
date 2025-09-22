import ButtonOption from "./button";
import "../../css/slidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <h2>pestaña lateral actualizada</h2>
            <ButtonOption titulo={"Inicio"} onClick={()=>alert("Hola")}></ButtonOption>
            <ButtonOption titulo={"Cotizar"}></ButtonOption>
            <ButtonOption></ButtonOption>
            <ButtonOption></ButtonOption>
            <ButtonOption></ButtonOption>
            <ButtonOption></ButtonOption>
        </div>
    )
}
export default Sidebar;