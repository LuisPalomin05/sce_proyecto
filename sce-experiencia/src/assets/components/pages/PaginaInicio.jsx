import "../../../css/paginainicio.css";
import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { notifications, notificationsOutline } from "ionicons/icons";





// importaciones de assets imagenes
import logo from '../../img/fondobanner.jpg'; 
import logo2 from "../../img/banner2.jpg";
import logo3 from "../../img/banner4.jpg";
import productoA from "../../img/productoA.webp";
import productoB from "../../img/productoB.webp";
import productoC from "../../img/productoC.webp";
import productoD from "../../img/productoD.webp";


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
      <br />
      <section className="catalogo-productos">
      {productosData.map((prod) => (
        <div className="producto-card" key={prod.id}>
          <img src={prod.imagen} alt={prod.nombre} />
          <h4>{prod.nombre}</h4>
          <p>{prod.descripcion}</p>
        </div>
      ))}
      </section>

      {/* Footer */}
      <footer className="FooterInicio">
        <p>Desarrollado por TorqueG-64-Grupo4 cibertec</p>
        <p>© 2024 TorqueG-64. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default PaginaInicio;