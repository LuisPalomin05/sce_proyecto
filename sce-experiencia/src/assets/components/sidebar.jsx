import ButtonOption from "./utils/button";
import CardUsuario from "./utils/cardUsuario";
import "../../css/slidebar.css";
import { IonIcon } from "@ionic/react";
import { homeOutline, cartOutline, cashOutline, cubeOutline, peopleCircleOutline, bagCheckOutline } from "ionicons/icons";
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
          icono={homeOutline}
          ruta={"/dashboard"}
        />
        <ButtonOption titulo={"Cotizar"} icono={cashOutline} ruta={"/dashboard/cotizar"}></ButtonOption>
        <ButtonOption titulo={"Compras"} icono={cartOutline} ruta={"/dashboard/compras"}></ButtonOption>
        <ButtonOption titulo={"Ventas"} icono={bagCheckOutline} ruta={"/dashboard/ventas"}></ButtonOption>
        <ButtonOption titulo={"Pedidos"} icono={cubeOutline} ruta={"/dashboard/pedidos"}></ButtonOption>
        <ButtonOption titulo={"Gestión Cliente/Proveedor"} icono={peopleCircleOutline} ruta={"/dashboard/administracion"}></ButtonOption>
      </div>
    </div>
  );
};
export default Sidebar;
