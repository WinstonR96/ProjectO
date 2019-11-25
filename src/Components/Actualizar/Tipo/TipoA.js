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
import { withRouter } from "react-router-dom";
import PoliticaPrivacidad from "./../../Global/Modal/PoliticaPrivacidad";
import NumericInput from "react-numeric-input";

class TipoA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ciudades: [],
      data: [],
      NumeroDocumento: "",
      codigoCiudad: "",
      codigoGenero: "",
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
      codigoGenero: data.sexo,
      ciudades,
      codigoCiudad: data.ciudad,
      data,
      NumeroDocumento
    });
  };

  HandleActualizar = () => {
    //Capturo los datos del formulario
    const { data, NumeroDocumento } = this.props;
    const { input, codigoGenero, codigoCiudad } = this.state;
    let nombres = input["nombres"] || data.nombres;
    let primerApellido = input["primerApellido"] || data.primerApellido;
    let segundoApellido = input["segundoApellido"] || data.segundoApellido;
    let sexo = codigoGenero || data.sexo;
    let ciudad = codigoCiudad || data.ciudad;
    let direccion = input["direccion"] || data.direccion;
    let celular = input["celular"].replace(/\D/g, "") || data.celular;
    let telefono = input["telefono"] || data.telefono;
    let email = input["email"] || data.email;
    //Hago un arreglo con los datos suministrados
    let datos = {
      NumeroDocumento,
      nombres,
      primerApellido,
      segundoApellido,
      sexo,
      ciudad,
      direccion,
      celular,
      telefono,
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

  handleCancelar = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  //Captura de datos del formulario
  handleChangeGenero = event => {
    this.setState({
      codigoGenero: event.target.value
    });
  };

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
      () => {
        console.log("Active input", inputName);
      }
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
      codigoCiudad,
      codigoGenero,
      NumeroDocumento,
      data: {
        nombres,
        primerApellido,
        segundoApellido,
        direccion,
        celular,
        telefono,
        email
      }
    } = this.state;
    return (
      <div className={"contenedor-tipoa"}>
        {/* <PoliticaPrivacidad/> */}
        {this.state.isOpenAvisoPrivacidad ? (
          <AvisoPrivacidad ocultarModal={this.toggleModalAviso} />
        ) : null}
        {this.state.isOpenPoliticaPrivacidad ? (
          <PoliticaPrivacidad
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
                <Label for="segundoApellido">SEGUNDO APELLIDO</Label>
                <Input
                  type="text"
                  name="segundoApellido"
                  id="segundoApellido"
                  onFocus={() => this.setActiveInput("segundoApellido")}
                  value={this.state.input["segundoApellido"] || segundoApellido}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="genero">GENERO</Label>
                <Input
                  value={codigoGenero}
                  type="select"
                  name="genero"
                  id="genero"
                  onChange={this.handleChangeGenero}
                >
                  <option value="0">Seleccione...</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="S">Sin Especificar</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="4">
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
          </Row>
          <Row>
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
            <Col xs="6" sm="4">
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
            <Col sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="telefono">TELEFONO</Label>
                <NumericInput
                  name="telefono"
                  id="telefono"
                  min={0}
                  max={100}
                  step={1}
                  precision={0}
                  size={30}
                  strict={true}
                  snap
                  className="form-control"
                  onFocus={() => this.setActiveInput("telefono")}
                  value={this.state.input["telefono"] || telefono}
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
                    onClick={this.HandleActualizar}
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
                  className={"btn-actualizar"}
                  onClick={this.handleCancelar}
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

export default withRouter(TipoA);
