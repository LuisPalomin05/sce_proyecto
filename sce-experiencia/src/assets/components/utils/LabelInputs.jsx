const LabelInputs = ({ nombre, children }) => {
  return (
    <div className="labelInput">
      <label className="labelItem" htmlFor={nombre.replace(/\s+/g, "")}>
        {nombre}:
      </label>
      <div className="inputChildren">
        <input className="inputDatos" type="text" name={nombre.replace(/\s+/g, "")} />
         {children ? <div className="labelIcon">
          {children}
          </div>
          : null}
      </div>
    </div>
  );
};

export default LabelInputs;
