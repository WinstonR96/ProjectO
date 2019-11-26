import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Contenido from "./Components/Global/Contenido";
import { withRouter } from "react-router-dom";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      idleTime: 0
    };
  }

  componentDidMount = () => {
    this.timeOut();
  };

  //Funciones para controlar la actividad
  onMouseMove = () => {
    this.setState({
      idleTime: 0
    });
  };

  onKeyPress = () => {
    this.setState({
      idleTime: 0
    });
  };

  //Funcion de timeout
  timeOut = () => {
    setInterval(this.timerIncrement, 60000); // 1 minute
  };

  //Funcion que permite recargar el formulario luego de que se cumpla el timeout establecido
  timerIncrement = () => {
    const { pathname } = this.props.location;
    const { idleTime } = this.state;
    var timeAux = idleTime + 1;
    this.setState({
      idleTime: timeAux
    });
    if (pathname !== "/") {
      if (idleTime >= window.config.REACT_APP_TIMEOUT) {
        this.props.history.push({
          pathname: "/"
        });
      }
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className="App"
        onMouseMove={this.onMouseMove}
        onKeyPress={this.onKeyPress}
      >
        <Contenido body={children} />
      </div>
    );
  }
}

export default withRouter(App);
