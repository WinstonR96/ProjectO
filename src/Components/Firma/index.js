import React, { Component } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import "./../../App.css";
import { FormGroup, Button } from "reactstrap";
import Header from "./../Global/Header";
import { FaTrash } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import Utils from "./../../Helpers/Utils";
import Service from "./../../Services/Service";
import Loading from "./../Global/Loading";

class Firma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firma: "",
      estaFirmando: false,
      clase: "",
      loading: false
    };
  }

  componentDidMount = () => {
    this.setState({
      firma: "",
      clase: "firma"
    });
    this.signaturePad.clear();
  };

  //Funciones
  HandleSpinner = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  handleActualizar = () => {
    this.HandleSpinner();
    let data;
    let firma = this.signaturePad.toDataURL();
    console.log(firma);
    //Obtenemos datos del props
    if (window.config.REACT_APP_TIPOFORM === "a") {
      const {
        NumeroDocumento,
        nombres,
        primerApellido,
        segundoApellido,
        sexo,
        ciudad,
        direccion,
        celular,
        telefono,
        email,
        token,
        funcionario
      } = this.props.location.state.data;
      // Asignamos los datos en un arreglo
      data = {
        NumeroDocumento,
        nombres,
        primerApellido,
        segundoApellido,
        sexo,
        ciudad,
        direccion,
        celular,
        telefono,
        email,
        firma,
        token,
        funcionario
      };
    } else {
      const {
        NumeroDocumento,
        nombres,
        primerApellido,
        ciudad,
        direccion,
        celular,
        email,
        token,
        funcionario
      } = this.props.location.state.data;
      // Asignamos los datos en un arreglo
      data = {
        NumeroDocumento,
        nombres,
        primerApellido,
        ciudad,
        direccion,
        celular,
        email,
        firma,
        token,
        funcionario
      };
    }
    console.log("Data", data);
    let url = window.config.REACT_APP_URL_ACTUALIZAR;
    Service.post(url, data)
      .then(response => {
        if (response.codigoRespuesta === "000") {
          this.HandleSpinner();
          Utils.AlertaUsuarioActualizado();
        }
      })
      .catch(error => {
        this.HandleSpinner();
        Utils.AlertaOcurrioUnError(error);
      });
    this.props.history.push({
      pathname: "/"
    });
  };

  //Manejo de la firma
  handleFirma = () => {
    this.setState({
      estaFirmando: true,
      clase: ""
    });
  };

  borrarFirma = () => {
    this.signaturePad.clear();
    this.setState({
      estaFirmando: false,
      clase: "firma"
    });
  };

  handleCancelar = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="loading">
          {this.state.loading ? <Loading /> : null}
        </div>
        <h3 className={"title"}>Actualización de datos personales</h3>
        <p className={"leyenda-firma"}>
          Firma en el recuadro para terminar el proceso de actualización
        </p>
        <div className={"contenedor-firma"}>
          {this.state.estaFirmando ? (
            <div className={"trash-firma"}>
              <span className={"icon-trash"} onClick={this.borrarFirma}>
                <FaTrash /> Borrar todo
              </span>
            </div>
          ) : (
            <div className={"trash-firma"}></div>
          )}
          <div className={this.state.clase} onClick={this.handleFirma}>
            <SignaturePad
              ref={ref => (this.signaturePad = ref)}
              width={800}
              height={200}
              penColor={"#000"}
            />
          </div>
        </div>
        <p className={"leyenda-firma"}>
          Al presionar aceptar, estás aceptando nuestra Política de manejo de
          datos personales
        </p>
        <FormGroup className={"form-button-firma"}>
          {this.state.estaFirmando ? (
            <Button color={"success"} onClick={this.handleActualizar}>
              Aceptar
            </Button>
          ) : (
            <Button disabled>Aceptar</Button>
          )}
          <Button onClick={this.handleCancelar}>Cancelar</Button>
        </FormGroup>
      </div>
    );
  }
}

export default withRouter(Firma);
