import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

const RecursosVirtuales = () => {
  return (
    <div>
      <table>
     <thead>
        <tr>
            <th>fecha</th>
            <th>nombre</th>
            <th>estado</th>
            <th>ruc</th>
            <th>acciones</th>
        </tr>
       
     </thead>
     <tbody> 
        <tr>
            <td>10 de octubre</td>
            <td>Hola</td>
            <td>Activo</td>
            <td>123456789</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
     </tbody>
      </table>
    </div>
  );
};

export default RecursosVirtuales;
