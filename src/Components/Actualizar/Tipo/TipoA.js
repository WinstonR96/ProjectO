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

class TipoA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ciudades: [],
      codigoCiudad: "",
      codigoGenero: "",
      inputName: "nombres",
      layoutName: "default",
      input: {},
      checkPolitica: false,
      checkAviso: false,
      isOpenAvisoPrivacidad: false
    };
  }

  componentDidMount = () => {
    this.setState({
      ciudades,
      codigoCiudad: this.props.datos.ciudad
    });
  };

  //Captura de datos del formulario
  handleChangeGenero(event) {
    this.setState({
      codigoGenero: event.target.value
    });
  }

  handleChangeCiudad(event) {
    this.setState({
      codigoCiudad: event.target.value
    });
  }

  // Modales
  toggleModalAviso = () => {
    this.setState({
      isOpenAvisoPrivacidad: true
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
    const { codigoCiudad } = this.state;
    return (
      <div className={"contenedor-tipoa"}>
        <AvisoPrivacidad isOpen={this.state.isOpenAvisoPrivacidad} />
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
                  value={this.state.input["numeroCedula"] || ""}
                  onChange={e => this.onChangeInput(e)}
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
                  value={this.state.input["nombres"] || ""}
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
                  value={this.state.input["primerApellido"] || ""}
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
                  value={this.state.input["segundoApellido"] || ""}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="genero">GENERO</Label>
                <Input
                  defaultValue={""}
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
                  value={this.state.input["direccion"] || ""}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="celular">CELULAR</Label>
                <Input
                  type="number"
                  name="celular"
                  id="celular"
                  onFocus={() => this.setActiveInput("celular")}
                  value={this.state.input["celular"] || ""}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup className={"formgroup"}>
                <Label for="telefono">TELEFONO</Label>
                <Input
                  type="number"
                  name="telefono"
                  id="telefono"
                  onFocus={() => this.setActiveInput("telefono")}
                  value={this.state.input["telefono"] || ""}
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
                  value={this.state.input["correo"] || ""}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="4"></Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"></Col>
            <Col xs="6" sm="4">
              <FormGroup check className={"formgroup"}>
                <Label check>
                  <Input
                    onChange={e =>
                      this.setState({ checkAviso: e.target.checked })
                    }
                    type="checkbox"
                  />{" "}
                  He leído y acepto el{" "}
                  <span className={"link"} onClick={this.toggleModalAviso}>
                    aviso de privacidad
                  </span>
                </Label>
                <Label check>
                  <Input
                    onChange={e =>
                      this.setState({ checkPolitica: e.target.checked })
                    }
                    type="checkbox"
                  />{" "}
                  Conozco y acepto la{" "}
                  <span
                    className={"link"}
                    onClick={() => console.log("prueba")}
                  >
                    politica de privacidad
                  </span>
                </Label>
                {this.state.checkAviso && this.state.checkPolitica ? (
                <Button className={"btn-actualizar"} color="success">Guardar</Button>
              ) : (
                <Button className={"btn-actualizar"} color="secondary">Guardar</Button>
              )}{" "}
              <Button className={"btn-actualizar"} color="secondary">Cancelar</Button>{" "}
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

export default TipoA;
