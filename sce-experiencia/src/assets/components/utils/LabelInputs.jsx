const LabelInputs = ({ nombre, children, types, value, onChange }) => {
  return (
    <div className="labelInput">
      <label className="labelItem" htmlFor={nombre.replace(/\s+/g, "")}>
        {nombre}:
      </label>
      <div className="inputChildren">
        <input className="inputDatos" type={types =='' ? 'text': types} name={nombre.replace(/\s+/g, "").toLowerCase()} value={value} onChange={onChange} />
         {children ? <div className="labelIcon">
          {children}
          </div>
          : null}
      </div>
    </div>
  );
};

export default LabelInputs;
