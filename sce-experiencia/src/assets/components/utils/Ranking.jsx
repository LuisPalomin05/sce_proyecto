

const Ranking = ({ Título, importesoles, importedolares }) => {
  return (
    <div>
      <table className="tablaranking">
        <thead>

       
        <tr>
          <th colSpan="3">{Título} </th>
        </tr>
        <tr>
          <th></th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
         </thead>
         
      </table>
    </div>
  );
};

export default Ranking;
