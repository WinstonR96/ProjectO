import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./../../App.css";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Service from "./../../Services/Service";

class Consultar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "numCedula",
      layoutName: "default",
      input: {}
    };
  }

  //Funciones
  consultarDatos = () => {
    let NumeroDocumento = this.state.input["numCedula"];
    console.log("Valor capturado", NumeroDocumento);
    if (NumeroDocumento === undefined || NumeroDocumento === "") {
      console.log("No esta definido");
      //TODO: lanzar error
    } else {
      let urlConsultar = window.config.REACT_APP_URL_CONSULTAR;
      let data = {
        tipoDocumento: "ced",
        numeroDocumento: NumeroDocumento
      };
      Service.post(urlConsultar, data)
        .then(response => console.log(response))
        .catch(err => console.error(err));
      this.irActualizar(data);
    }
  };

  //Permite ir al componente actualizar
  irActualizar = data => {
    this.props.history.push({
      pathname: "/actualizar",
      state: { data }
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

  // Render de la vista

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h3>Actualización de datos personales</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="numCedula">NÚMERO DE CÉDULA</Label>
                <Input
                  type="number"
                  name="numCedula"
                  id="numCedula"
                  onFocus={() => this.setActiveInput("numCedula")}
                  value={this.state.input["numCedula"] || ""}
                  onChange={e => this.onChangeInput(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btnConsultar" onClick={this.consultarDatos}>
                Entrar
              </Button>
            </Col>
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
                layout={{
                  default: ["1 2 3", "4 5 6", "7 8 9", "{shift} 0 _", "{bksp}"],
                  shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
                }}
                display={{
                  "{lock}": "mayus",
                  "{bksp}": "borrar",
                  "{enter}": "enter"
                }}
                theme={"hg-theme-default hg-layout-numeric numeric-theme"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Consultar;
