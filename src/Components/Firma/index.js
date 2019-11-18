import React, { Component } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import "./../../App.css";
import { FormGroup, Button } from 'reactstrap'
import Header from "./../Global/Header";
import{ FaTrash } from "react-icons/fa";

class Firma extends Component {

  componentDidMount = () => {
    this.signaturePad.clear()
    this.signaturePad.Background = null;
  }

  render(){
    return(
      <div>
        <Header/>
        <h3 className={"title"}>Actualización de datos personales</h3>
        <p className={"leyenda-firma"}>Firma en el recuadro para terminar el proceso de actualización</p>
        <div className={"contenedor-firma"}>
          <FaTrash />{" "}
          <SignaturePad
            ref={ref => this.signaturePad = ref}
            width={800}
            height={400}
            penColor={"#000"}
          />
        </div>
      </div>
    );
  }
}

export default Firma;
