import React, { Component } from "react";

class Actualizar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    let data = this.props.location.state.data.numeroDocumento;
    console.log("data en actualizar", data);
  };

  render() {
    return <div>Actualizar</div>;
  }
}

export default Actualizar;
