
const Graphicbar =({Título,importesoles,importedolares})=> {
    return (
              <div>
        <div>
          <p>{Título}</p>
        </div>
        <div>
          <section>
            <div>
              <p>{Título} en Soles</p>
              <p>{importesoles}</p>
            </div>
            <div>
              <p>{Título} en Dolares</p>
              <p>{importedolares}</p>
            </div>
          </section>
          <section>
            <div>
            </div>
          </section>
        </div>
      </div>

    );

}

export default Graphicbar;