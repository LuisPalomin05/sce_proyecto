const OptionInputs = ({ nombre, value,options, onChange }) => {
    return (
        <div className="ContenedorOpciones">
            <label className="labelItem">{nombre}</label>
            <select onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
                </select>
        </div>
    );
}

export default OptionInputs;