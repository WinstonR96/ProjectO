import React, { Component } from "react";
import TipoA from "./Tipo/TipoA";
import TipoB from "./Tipo/TipoB";
import Header from "./../Global/Header";
import { withRouter } from "react-router-dom";
import NotFound from "./NotFound";

class Actualizar extends Component {
  render() {
    let data = this.props.location.state.data[0];
    let NumeroDocumento = this.props.location.state.NumeroDocumento;
    return (
      <div>
        <Header />
        <h3 className={"title"}>Actualización de datos personales</h3>
        {window.config.REACT_APP_TIPOFORM.toLowerCase() === "a" ? (
          <TipoA data={data} NumeroDocumento={NumeroDocumento} />
        ) : window.config.REACT_APP_TIPOFORM.toLowerCase() === "b" ? (
          <TipoB data={data} NumeroDocumento={NumeroDocumento} />
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default withRouter(Actualizar);
