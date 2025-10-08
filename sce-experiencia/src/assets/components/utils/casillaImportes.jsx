const Importes = ({ titulo, valorMonto, simboloMoneda }) => {
  return (
    <div className="casillas">
      <div className="tituloCasilla">
        <p style={{ flex: 1 }}>{titulo} </p>
        <p>:</p>
      </div>

      <div className="importesCasilla">
        <p className="simboloCasilla">{simboloMoneda}</p>
        <p className="textoCasila">{valorMonto}</p>
      </div>
    </div>
  );
};

export default Importes;
