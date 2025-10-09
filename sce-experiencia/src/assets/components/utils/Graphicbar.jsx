import "../../../css/Graphicbar.css";

const Graphicbar = ({ Título, importesoles, importedolares }) => {
  return (
    <div className="graphicbar">
      <div>
        <p>{Título}</p>
      </div>
      <div className="graphicbar-container">
        <section className="importes-container">
          <div className="importes">
            <p>{Título} en Soles</p>
            <p>{importesoles}</p>
          </div>
          <div className="importes">
            <p>{Título} en Dolares</p>
            <p>{importedolares}</p>
          </div>
        </section>
        <section>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Graphicbar;
