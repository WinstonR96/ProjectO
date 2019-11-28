import React, { Component } from "react";
import "./../../App.css";

class NotFound extends Component {
  render() {
    return (
      <div className={"not-found-contenedor"}>
        <h1 id="tipo-de-formulario-invalido">Tipo de formulario invalido</h1>
        <p>El tipo de formulario configurado no es reconocido.</p>
        <h2 id="soluci-n">Solución</h2>
        <ul>
          <li>1. Dirigirse al archivo config.js.</li>
          <li>2. Buscar la propiedad REACT_APP_TIPOFORM.</li>
          <li>3. Cambiar valor de la propiedad por una opción valida.</li>
        </ul>
        <p>
          Las opciones posibles son: <strong>a</strong>, <strong>b</strong>.
        </p>
        <blockquote>
          <p>
            Recuerde que puede escribir la opción en mayúscula o minúscula .
          </p>
        </blockquote>
      </div>
    );
  }
}

export default NotFound;
