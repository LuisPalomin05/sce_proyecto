import "./css/App.css";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Login from "./assets/components/login";
import Inicio from "./assets/components/inicio";
import ButtonOption from "./assets/components/button";
import Sidebar from "./assets/components/sidebar";
function App() {
  return (
    
    <section className="layout">

      <Sidebar />

      <Inicio />

    </section>
  );
}

export default App;
