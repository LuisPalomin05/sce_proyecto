const Importes = ({ titulo, valorMonto, simboloMoneda }) => {
  return (
    <div style={{ display: "flex", fontWeight: "bold" }}>
      <p>{titulo}</p>
      <div style={{ display: "flex" }}>
        <p>{simboloMoneda}</p>
        <p>{valorMonto}</p>
      </div>
    </div>
  );
};
