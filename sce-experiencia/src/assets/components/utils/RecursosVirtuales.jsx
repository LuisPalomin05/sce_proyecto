import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import "../../../css/recursos.css";


const RecursosVirtuales = () => {
  return (
    <div>
      <h1 className="nr">Nuestros recursos virtuales</h1>  
     <div className="rec">
       <div className="rec2">
       <ion-icon name="cloud-outline"></ion-icon>
       <div>Backend en la nube</div>
       </div>
       <div className="rec2">
       <ion-icon name="book-outline"></ion-icon>
       <div>Libro de Reclamaciones y Formatos de Documentación</div>       
       </div>
       <div className="rec2">
       <ion-icon name="logo-whatsapp"></ion-icon>
       <div>Soporte Técnico via Mensajería</div>
       </div>  
       </div>
    <div className="pie">
    <text>Desarrollado en base a:</text><ion-icon name="logo-javascript"></ion-icon>
    <ion-icon name="logo-react"></ion-icon>
    </div>



    </div>
  );
};

export default RecursosVirtuales;
