import Sidebar from "./sidebar";
import "../../css/Inicio.css";
import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";
import { Routes, Route } from "react-router-dom";

// Componentes
import InputBuscador from "./utils/InputBuscador";
import Notificaciones from "./utils/bxNotificaciones";
import Cotizador from "./pages/Cotizar";
import Compras from "./pages/Compras";
import Pedidos from "./pages/Pedidos";
import Ventas from "./pages/Ventas";
import PaginaInicio from "./pages/PaginaInicio";
import logo from "../img/fondobanner.jpg"; 
import logo2 from "../img/banner2.jpg";
import logo3 from "../img/banner4.jpg";
import productoA from "../img/productoA.webp";
import productoB from "../img/productoB.webp";
import productoC from "../img/productoC.webp";
import productoD from "../img/productoD.webp";

// para boton de whatsapp
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton"; // ajusta la ruta



// Datos del slider
const slidesData = [
  { id: 1, tipo: "inicio", imagen: logo, slogan: "" },
  { id: 2, tipo: "producto", imagen: logo2, nombre: "", descripcion: "" },
  { id: 3, tipo: "producto", imagen: logo3, nombre: "", descripcion: "" },
];

// Datos para el catalogo de productos
const productosData = [

  { id: 1, tipo: "producto", imagen: productoA, nombre: "TARUGO PLASTICO NARANJA 3/8",  descripcion:" Accesorios de alta calidad ideales para carpintería y construcción " },

  { id: 2, tipo: "producto", imagen: productoB, nombre: "TORNILLO SPACK 3 X 16 MM (10PCS)", descripcion: " Diseñado para fijaciones seguras en maderas y otros materiales"},

  { id: 3, tipo: "producto", imagen: productoC, nombre: "LLAVE DE GRIFERIA 18 EN 1 MULTIFUNCIONAL", descripcion:"Para tener una mayor eficiencia en baños y cocinas, tubo de abasto y griferia" },

  { id: 4, tipo: "producto", imagen: productoD, nombre: "TUERCA MILIMETRICA M6 (10PCS)", descripcion:"Se utiliza para unir tornillos de la misma medida, es común en carpintería metálica y mobiliario" },
  
  // ... más productos
];



const Inicio = () => {
  // Hooks
  const [searchValue, setSearchValue] = useState("");
  const [showNotificacion, setShowNotificacion] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slidesData[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inicio-container">
      <Sidebar />

      <div className="inicio-content">
        <nav className="navbar">
          <p className="navbar-title">Aquí encontrarás la mejor calidad al alcance de tus manos</p>
          <div className="navbar-controls">
            <div className={`notification-wrapper ${showNotificacion ? "active" : ""}`}>
              <IonIcon
                className="notification-icon"
                icon={showNotificacion ? notifications : notificationsOutline}
                onClick={() => setShowNotificacion(!showNotificacion)}
              />
              {showNotificacion && (
                <div className="notification-box">
                  <Notificaciones titulo={"Notificaciones"} contenido={"No hay nuevas notificaciones"} />
                </div>
              )}
            </div>

            <InputBuscador
              placeholder="Buscar..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </nav>

        {/* Slider con fondo */}
        <div className="slider-container">
          <div
            className="slider-background"
            style={{ backgroundImage: `url(${slide.imagen})` }}
          >
            <div className="slider-text">
              {slide.tipo === "inicio" && <h2>{slide.slogan}</h2>}
              {slide.tipo === "producto" && (
                <>
                  <h3>{slide.nombre}</h3>
                  <p>{slide.descripcion}</p>
                </>
              )}
            </div>
          </div>

          {/* Puntos de navegación */}
          <div className="slider-dots">
            {slidesData.map((_, idx) => (
              <span
                key={idx}
                className={idx === currentSlide ? "active" : ""}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>
        </div>
            {/* Catálogo de productos */}
      <section className="catalogo-productos">
      {productosData.map((prod) => (
        <div className="producto-card" key={prod.id}>
          <img src={prod.imagen} alt={prod.nombre} />
          <h4>{prod.nombre}</h4>
          <p>{prod.descripcion}</p>
        </div>
      ))}
      </section>

        <section className="main-content">
          <Routes>
            <Route path="/" element={<PaginaInicio />} />
            <Route path="cotizar" element={<Cotizador />} />
            <Route path="compras/*" element={<Compras />} />
            <Route path="ventas/*" element={<Ventas />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="administracion" element={<div>Página de Gestión Cliente/Proveedor</div>} />
          </Routes>
        </section>
      </div>
       <WhatsAppButton />
    </div>
  );
};

export default Inicio;
