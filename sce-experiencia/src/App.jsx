import "./css/App.css";
import Login from "./assets/components/login";
import Inicio from "./assets/components/inicio";
import ButtonOption from "./assets/components/button";
import Sidebar from "./assets/components/sidebar";
function App() {
  return (
    <section className="layout">

      <Sidebar />

      <div className="body">
        <h2>pantalla de inicio</h2>
      </div>
    </section>
  );
}

export default App;
