import React from "react";
// import perfil from "../../img/FotoPerfilUsuario.jpg";
import "../../../css/cardUsuario.css";

const CardUsuario = ({ urlImagen, nombre, nombreUsuario, isOpen }) => {
  return (
    <div className={`card-usuario ${!isOpen ? "collapsed" : ""}`}>
      <div className="avatar-container">
        <img
          src={urlImagen || perfil}
          alt="Usuario"
          className={isOpen ? "avatar" : "avatartoggle"}
        />
      </div>
      {isOpen && (
        <div className="user-info">
          <h3 className="nombre">{nombre}</h3>
          <p className="username">{nombreUsuario}</p>
        </div>
      )}
    </div>
  );
};

export default CardUsuario;

