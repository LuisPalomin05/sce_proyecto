const LabelInputs = ({ nombre, children, types = "text", value, onChange }) => {
  const handleChange = (e) => {
    let val = e.target.value;

    // Si el tipo es numérico, validamos con regex
    if (types === "number") {
      // Solo permite números enteros o decimales (ej: 10, 10.5, .5)
      if (/^\d*\.?\d*$/.test(val)) {
        onChange(e);
      }
      return; // evitamos llamar a onChange si no pasa la validación
    }

    // Si no es número, no validamos nada
    onChange(e);
  };

  const handleKeyDown = (e) => {
    // Evita notación científica o signos
    if (["e", "E", "+", "-"].includes(e.key) && types === "number") {
      e.preventDefault();
    }
  };

  return (
    <div className="labelInput">
      <label className="labelItem" htmlFor={nombre.replace(/\s+/g, "")}>
        {nombre}:
      </label>
      <div className="inputChildren">
        <input
          className="inputDatos"
          type={types || "text"}
          name={nombre.replace(/\s+/g, "").toLowerCase()}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputMode={types === "number" ? "decimal" : "text"} // mejora el teclado móvil
          step={types === "number" ? "0.01" : undefined}
          min={types === "number" ? "0" : undefined}
        />
        {children ? <div className="labelIcon">{children}</div> : null}
      </div>
    </div>
  );
};

export default LabelInputs;
