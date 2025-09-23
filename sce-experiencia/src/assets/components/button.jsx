import "../../css/buttons.css";

const ButtonOption = ({titulo, onClick}) => {
    return (
        
        <div className="btn" onClick={onClick}>
           <div className="icono">
            <ion-icon name="home-outline"></ion-icon>

           </div>
           
            {titulo}           
            </div>
        
    )
}
export default ButtonOption;