import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import ciudades from "./../codigopostal.json";
import "./../../../App.css";
import layout from "simple-keyboard-layouts/build/layouts/spanish";
import AvisoPrivacidad from "./../../Global/Modal/AvisoPrivacidad";
import PoliticaPrivacidad from "./../../Global/Modal/PoliticaPrivacidad";
import { withRouter } from "react-router-dom";
import NumericInput from "react-numeric-input";

class TipoB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ciudades: [],
      data: [],
      NumeroDocumento: "",
      codigoCiudad: "",
      inputName: "nombres",
      layoutName: "default",
      input: {},
      checkPolitica: false,
      checkAviso: false,
      isOpenAvisoPrivacidad: false,
      isOpenPoliticaPrivacidad: false
    };
  }

  componentDidMount = () => {
    const { data, NumeroDocumento } = this.props;
    this.setState({
      ciudades,
      codigoCiudad: data.ciudad,
      data,
      NumeroDocumento
    });
  };

  handleCancelar = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  handleActualizar = () => {
    const { data, NumeroDocumento } = this.props;
    const { input, codigoCiudad } = this.state;
    let nombres = input["nombres"] || data.nombres;
    let primerApellido = input["primerApellido"] || data.primerApellido;
    let ciudad = codigoCiudad || data.ciudad;
    let direccion = input["direccion"] || data.direccion;
    let celular = input["celular"] || data.celular;
    let email = input["email"] || data.email;
    //Hago un arreglo con los datos suministrados
    let datos = {
      NumeroDocumento,
      nombres,
      primerApellido,
      ciudad,
      direccion,
      celular,
      email
    };
    this.irFirma(datos);
  };

  //Permite ir al componente firma
  irFirma = data => {
    this.props.history.push({
      pathname: "/firma",
      state: { data }
    });
  };

  //Captura de datos del formulario
  handleChangeCiudad = event => {
    this.setState({
      codigoCiudad: event.target.value
    });
  };

  // Modales
  toggleModalAviso = () => {
    this.setState(prevState => ({
      isOpenAvisoPrivacidad: !prevState.isOpenAvisoPrivacidad
    }));
  };

  toggleModalPolitica = () => {
    this.setState(prevState => ({
      isOpenPoliticaPrivacidad: !prevState.isOpenPoliticaPrivacidad
    }));
  };

  checkModalPrivacidad = value => {
    this.setState({
      checkPolitica: value
    });
  };

  checkModalAviso = value => {
    this.setState({
      checkAviso: value
    });
  };

  //Funciones para el buen funcionamiento del teclado
  onChangeAll = inputObj => {
    this.setState({
      input: inputObj
    });
  };

  onKeyPress = button => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  setActiveInput = inputName => {
    this.setState(
      {
        inputName: inputName
      },
      () => {}
    );
  };

  render() {
    const options = [];
    this.state.ciudades.forEach((entry, index) =>
      options.push(
        <option key={index} value={entry.IdMpio}>
          {entry.NomMpio}
        </option>
      )
    );
    const {
      NumeroDocumento,
      codigoCiudad,
      data: { nombres, primerApellido, direccion, celular, email }
    } = this.state;
    return (
      <div className={"contenedor-tipoa"}>
        {this.state.isOpenAvisoPrivacidad ? (
          <AvisoPrivacidad
            checkAviso={this.state.checkAviso}
            checkModalAviso={this.checkModalAviso}
            ocultarModal={this.toggleModalAviso}
          />
        ) : null}
        {this.state.isOpenPoliticaPrivacidad ? (
          <PoliticaPrivacidad
            checkPolitica={this.state.checkPolitica}
            checkModalPrivacidad={this.checkModalPrivacidad}
            ocultarModal={this.toggleModalPolitica}
          />
        ) : null}
        <Container>
          <Row>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="numeroCedula">NÚMERO DE CÉDULA</Label>
                <Input
                  type="number"
                  name="numeroCedula"
                  id="numeroCedula"
                  onFocus={() => this.setActiveInput("numeroCedula")}
                  value={NumeroDocumento}
                  onChange={e => this.onChangeInput(e)}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="nombres">NOMBRES</Label>
                <Input
                  type="text"
                  name="nombres"
                  id="nombres"
                  onFocus={() => this.setActiveInput("nombres")}
                  value={this.state.input["nombres"] || nombres}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="primerApellido">PRIMER APELLIDO</Label>
                <Input
                  type="text"
                  name="primerApellido"
                  id="primerApellido"
                  onFocus={() => this.setActiveInput("primerApellido")}
                  value={this.state.input["primerApellido"] || primerApellido}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="ciudad">CIUDAD</Label>
                <Input
                  value={codigoCiudad}
                  type="select"
                  name="ciudad"
                  id="ciudad"
                  onChange={this.handleChangeCiudad}
                >
                  {options}
                </Input>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="direccion">DIRECCIÓN</Label>
                <Input
                  type="text"
                  name="direccion"
                  id="direccion"
                  onFocus={() => this.setActiveInput("direccion")}
                  value={this.state.input["direccion"] || direccion}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="celular">CELULAR</Label>
                <NumericInput
                  name="celular"
                  id="celular"
                  min={0}
                  max={100}
                  step={1}
                  precision={0}
                  size={30}
                  strict={true}
                  snap
                  className="form-control"
                  onFocus={() => this.setActiveInput("celular")}
                  value={this.state.input["celular"] || celular}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"></Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="correo">CORREO</Label>
                <Input
                  type="email"
                  name="correo"
                  id="correo"
                  onFocus={() => this.setActiveInput("correo")}
                  value={this.state.input["correo"] || email}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="4"></Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"></Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label check>
                  <Input
                    checked={this.state.checkAviso}
                    onChange={e =>
                      this.setState({ checkAviso: e.target.checked })
                    }
                    type="checkbox"
                  />{" "}
                  He leído y acepto el{" "}
                </Label>
                <span className={"link"} onClick={this.toggleModalAviso}>
                  {" "}
                  aviso de privacidad
                </span>
                <br />
                <Label check>
                  <Input
                    checked={this.state.checkPolitica}
                    onChange={e =>
                      this.setState({ checkPolitica: e.target.checked })
                    }
                    type="checkbox"
                  />{" "}
                  Conozco y acepto la{" "}
                </Label>
                <span className={"link"} onClick={this.toggleModalPolitica}>
                  {" "}
                  politica de privacidad
                </span>
                <br />
                {this.state.checkAviso && this.state.checkPolitica ? (
                  <Button
                    className={"btn-actualizar"}
                    onClick={this.handleActualizar}
                    color="success"
                  >
                    Guardar
                  </Button>
                ) : (
                  <Button
                    disabled
                    className={"btn-actualizar"}
                    color="secondary"
                  >
                    Guardar
                  </Button>
                )}{" "}
                <Button
                  onClick={this.handleCancelar}
                  className={"btn-actualizar"}
                  color="secondary"
                >
                  Cancelar
                </Button>{" "}
              </FormGroup>
            </Col>
            <Col sm="4"></Col>
          </Row>
          <Row>
            <Col>
              <Keyboard
                mergeDisplay={true}
                keyboardRef={r => (this.keyboard = r)}
                inputName={this.state.inputName}
                onChangeAll={inputObj => this.onChangeAll(inputObj)}
                onKeyPress={button => this.onKeyPress(button)}
                layoutName={this.state.layoutName}
                layout={layout}
                display={{
                  "{lock}": "mayus",
                  "{bksp}": "borrar",
                  "{enter}": "enter"
                }}
                theme={"hg-theme-default"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(TipoB);
