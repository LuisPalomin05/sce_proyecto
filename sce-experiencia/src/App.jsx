import "./css/App.css";
import "./css/login.css";
import Login from "./assets/components/login";
import Inicio from "./assets/components/inicio";
import ButtonOption from "./assets/components/button";
import Sidebar from "./assets/components/sidebar";

function App() {
  return (
    <section className="layout">

      <Login/>

       <Login nombre="Invitado" />

       <Sidebar />

      <Inicio />

    </section>
  );
}

export default App;
