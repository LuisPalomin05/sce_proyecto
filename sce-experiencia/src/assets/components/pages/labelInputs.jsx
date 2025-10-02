
const LabelInputs = ({ label, children }) => {
    return (
            <div>
              <label htmlFor="nombreCliente">Nombre:</label>
              <input type="text" name="nombreCliente" />
              {children? children : null}
            </div>

    )}

export default LabelInputs;