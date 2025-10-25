import "../../../css/paginainicio.css";
import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";

// importaciones de assets imagenes
import logo from "../../img/fondobanner.jpg";
import logo2 from "../../img/banner2.jpg";
import logo3 from "../../img/banner4.jpg";
import productoA from "../../img/productoA.webp";
import productoB from "../../img/productoB.webp";
import productoC from "../../img/productoC.webp";
import productoD from "../../img/productoD.webp";
import productoE from "../../img/productoE.webp";
import productoF from "../../img/productoF.webp";
import productoG from "../../img/productoG.webp";
import productoH from "../../img/productoH.webp";
import productoAtr from "../../img/productoA-trasera.jfif";
import productoBtr from "../../img/productoB-trasera.jfif";
import productoCtr from "../../img/productoC-trasera.webp";
import productoDtr from "../../img/productoD-trasera.jpg";
import productoEtr from "../../img/productoE-trasera.jfif";
import productoFtr from "../../img/productoF-trasera.jfif";
import productoGfr from "../../img/productoG-trasera.webp";
import productoHtr from "../../img/productoH-trasera.webp";

// Datos del slider
const slidesData = [
  { id: 1, tipo: "inicio", imagen: logo, slogan: "" },
  { id: 2, tipo: "producto", imagen: logo2, nombre: "", descripcion: "" },
  { id: 3, tipo: "producto", imagen: logo3, nombre: "", descripcion: "" },
];

// Datos para el catalogo de productos
const productosData = [
  {
    id: 1,
    tipo: "producto",
    imagen: productoA,
    imagen2: productoAtr,
    nombre: "TARUGO PLASTICO NARANJA 3/8",
    descripcion: " Accesorios de alta calidad ideales para carpintería y construcción ",
    precio: "S/3.50",
  },

  {
    id: 2,
    tipo: "producto",
    imagen: productoB,
    imagen2: productoBtr,
    nombre: "TORNILLO SPACK 3 X 16 MM (10PCS)",
    descripcion: " Diseñado para fijaciones seguras en maderas y otros materiales ",
    precio: "S/5.20",
  },

  {
    id: 3,
    tipo: "producto",
    imagen: productoC,
    imagen2: productoCtr,
    nombre: "LLAVE DE GRIFERIA 18 EN 1 MULTIFUNCIONAL",
    descripcion: "Para tener una mayor eficiencia en baños y cocinas, tubo de abasto y griferia ",
    precio: "S/7.00",
  },

  {
    id: 4,
    tipo: "producto",
    imagen: productoD,
    imagen2: productoDtr,
    nombre: "TUERCA MILIMETRICA M6 (10PCS)",
    descripcion: "Se utiliza para unir tornillos de la misma medida, es común en ,carpintería metálica y mobiliario ",
    precio: "S/2.10",
  },

  {
    id: 5,
    tipo: "producto",
    imagen: productoE,
    imagen2: productoEtr,
    nombre: "COMPRESORA DE AIRE WERKEN ",
    descripcion: "Tiene un conector regular, cable de 1.5 metros ideal para múltiples aplicaciones ",
    precio: "S/319.00",
  },
  {
    id: 6,
    tipo: "producto",
    imagen: productoF,
    imagen2: productoFtr,
    nombre: "CINCEL PUNTA 3/4 MAJOR 1UND",
    descripcion: "Es una herramienta ideal de albañilería segura y resistente para trabajos de construcción ",
    precio: "S/6.00",
  },
  {
    id: 7,
    tipo: "producto",
    imagen: productoG,
    imagen2: productoGfr,
    nombre: "TALADRO PERCUTOR 1/2  STANLEY",
    descripcion: "Te ofrece un diseño reversible y empuñadura anti-vibración garantizan un uso seguro ",
    precio: "S/169.90",
  },
  {
    id: 8,
    tipo: "producto",
    imagen: productoH,
    imagen2: productoHtr,
    nombre: "FORNEY EASY WELD 261 SOLDADORA",
    descripcion: "Es ideal para proyectos de bricolaje, mantenimiento, reparación y fabricación de metales. ",
    precio: "S/520.99",
  },

  // ... más productos
];

const PaginaInicio = () => {
  // Hooks
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slidesData[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="paginaInicioElement">
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
      <div>

        {/* Catálogo de productos */}
        <section className="catalogo-productos">
          {productosData.map((prod) => (
            <div className="producto-card" key={prod.id}>
              <div className="img-container">
                <img src={prod.imagen} alt={prod.nombre} className="img-principal" />
                <img src={prod.imagen2} alt={prod.nombre} className="img-secundaria" />
                 </div>
                <h4>{prod.nombre}</h4>
                <p>{prod.descripcion}</p>
                <p>{prod.precio}</p>
              </div>
           
          ))}
        </section>


      </div>
      {/* Footer */}
      <footer className="FooterInicio">
        <p>Desarrollado por TorqueG-64-Grupo4 cibertec</p>
        <p>© 2024 TorqueG-64. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PaginaInicio;
