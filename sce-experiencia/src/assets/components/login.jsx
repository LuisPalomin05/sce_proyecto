// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../css/login.css";
// import SvgIcon from "../img/logo.svg.jsx";

// function Login({ validacion }) {
//   const navigate = useNavigate();
//   const [empresa, setEmpresa] = useState("20601395801");
//   const [usuario, setUsuario] = useState("");
//   const [contrasena, setContrasena] = useState("");
//   const [error, setError] = useState("");

//   const manejarLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://backendapi-6thn.onrender.com/api/usuarios/login",
//         {
//           usuario,
//           contraseña: contrasena,
//         }
//       );

//       console.log(response.data);
//       validacion(true);
//       navigate("/dashboard");
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message);
//       } else {
//         setError("Error al conectar con el servidor");
//       }
//     }
//   };

//   return (
//     <div className="pagina-login">
//       <div className="contenedor-superior-izquierdo">
//         <div className="logoTitulo">
//           <SvgIcon size={60} />
//           <p>SCE</p>
//         </div>

//         <form onSubmit={manejarLogin} method="post" className="formulario-login">
//           <div className="grupo-entrada">
//             <div className="etiqueta-entrada">R.U.C EMPRESA</div>
//             <input
//               type="text"
//               value={empresa}
//               onChange={(e) => setEmpresa(e.target.value)}
//             />
//           </div>

//           <div className="grupo-entrada">
//             <div className="etiqueta-entrada">USUARIO</div>
//             <input
//               type="text"
//               value={usuario}
//               onChange={(e) => setUsuario(e.target.value)}
//             />
//           </div>

//           <div className="grupo-entrada">
//             <div className="etiqueta-entrada">CONTRASEÑA</div>
//             <input
//               type="password"
//               value={contrasena}
//               onChange={(e) => setContrasena(e.target.value)}
//             />
//           </div>

//           {error && <p className="mensaje-error">{error}</p>}

//           <button type="submit" className="boton-login">
//             INICIAR SESIÓN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";

import SvgIcon from "../img/logo.svg.jsx";

function Login({ validacion }) {
  const navigate = useNavigate();
  const [empresa, setEmpresa] = useState("20601395801");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  

  const manejarLogin = (e) => {
    e.preventDefault();
    validacion(true);
    navigate("/dashboard");
  };

  return (
    <div className="pagina-login">
      <div className="contenedor-superior-izquierdo">
        <div className="logoTitulo">
          <SvgIcon size={60} />
          <p>SCE</p>
        </div>

        <form onSubmit={manejarLogin} method="post" className="formulario-login">
          <div className="grupo-entrada">
            <div className="etiqueta-entrada">R.U.C EMPRESA</div>
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>

          <div className="grupo-entrada">
            <div className="etiqueta-entrada">USUARIO</div>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="grupo-entrada">
            <div className="etiqueta-entrada">CONTRASEÑA</div>
            <input
              type="password"
              value={contrasena}
              
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <button type="submit" className="boton-login">
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
