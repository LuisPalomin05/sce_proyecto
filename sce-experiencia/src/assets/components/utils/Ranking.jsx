import "../../../css/ranking.css";


const Ranking =({ Título, importesoles, importedolares })=>{
    return(
<div>
<table className="tablaranking">
   <tr>
 <th colspan="3">{Título} </th>

    </tr>     
  <tr>
    <th></th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
    <tr>
    <td>3</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
    <tr>
    <td>4</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
   <tr>
    <td>5</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>



</div>
    );

};

export default Ranking;