import React, { Component } from "react";
import TipoA from "./Tipo/TipoA";
import TipoB from "./Tipo/TipoB";
import Header from "./../Global/Header";

class Actualizar extends Component {
  render() {
    let data = this.props.location.state.data[0];
    let NumeroDocumento = this.props.location.state.NumeroDocumento;
    return (
      <div>
        <Header/>
        <h3 className={"title"}>Actualización de datos personales</h3>
        {window.config.REACT_APP_TIPOFORM === "a" ? (
          <TipoA data={data} NumeroDocumento={NumeroDocumento} />
        ) : (
          <TipoB data={data} NumeroDocumento={NumeroDocumento} />
        )}
      </div>
    );
  }
}

export default Actualizar;
