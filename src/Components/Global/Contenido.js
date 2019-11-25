import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../../App.css";

class Contenido extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return <div className="Content">{body}</div>;
  }
}

export default Contenido;
