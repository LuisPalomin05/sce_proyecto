import "../../css/buttons.css";

const ButtonOption = ({titulo, onClick}) => {
    return (
        
        <div className="btn" onClick={onClick}>
            <ion-icon name="home-outline"></ion-icon>
            {titulo}           
            </div>
        
    )
}
export default ButtonOption;