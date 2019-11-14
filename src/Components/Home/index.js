import React, { Component } from "react";
import "./../../App.css";
import { Button } from "reactstrap";

class Home extends Component {
  irConsultar = () => {
    this.props.history.push("/consultar");
  };

  render() {
    return (
      <div className="home">
        <Button
          color="danger"
          size="lg"
          className="button-app"
          onClick={this.irConsultar}
        >
          Haz clic aquí
        </Button>
      </div>
    );
  }
}

export default Home;
