import React from "react";
import { Link } from "react-router-dom";

function SeccionDetallepopup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}></button>
        {children}

        <img
          className="fotomodal"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple18/v4/46/2d/23/462d2304-1bc8-fbd6-5fa6-186dbf6b58dd/source/512x512bb.jpg"
          alt="adopta tu mascota"
        ></img>

        <h4 className="preguntaadopcion2">
          ¿Quieres continuar con el proceso de adopción?
        </h4>
        <div className="cancelaradoptar">
          <button className="detallesbuttonadoptar" onClick={onClose}>
            Cancelar
          </button>
          <Link to={"/Formulario"}>
            <button className="detallesbuttonadoptar">Adoptar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SeccionDetallepopup;
