import "../../css/buttons.css";

const ButtonOption = ({titulo, onClick}) => {
    return (
        
        <div className="btn" onClick={onClick}>
            <img src="casita.png"/>
            {titulo}
            </div>
        
    )
}
export default ButtonOption;