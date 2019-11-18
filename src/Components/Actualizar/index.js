import React, { Component } from "react";
import TipoA from "./Tipo/TipoA";
import TipoB from "./Tipo/TipoB";
import Header from "./../Global/Header";

class Actualizar extends Component {
  componentDidMount = () => {
    //let data = this.props.location.state.data.numeroDocumento;
    //console.log("data en actualizar", data);
  };

  render() {
    return (
      <div>
        <Header/>
        <h3 className={"title"}>Actualización de datos personales</h3>
        {window.config.REACT_APP_TIPOFORM === "a" ? (
          <TipoA datos={""} />
        ) : (
          <TipoB datos={""} />
        )}
      </div>
    );
  }
}

export default Actualizar;
