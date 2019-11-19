import React, { Component } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import "./../../App.css";
import { FormGroup, Button } from 'reactstrap'
import Header from "./../Global/Header";
import{ FaTrash } from "react-icons/fa";

class Firma extends Component {
  constructor(props){
    super(props);

    this.state = {
      firma: "",
      estaFirmando: false,
      clase: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      firma: "",
      clase: "firma"
    });
    this.signaturePad.clear();
  }


  //Manejo de la firma
  handleFirma = () => {
    this.setState({
      estaFirmando: true,
      clase: ""
    });
  }

  borrarFirma = () => {
    this.signaturePad.clear();
    this.setState({
      estaFirmando: false,
      clase: "firma"
    });
  }

  render(){
    return(
      <div>
        <Header/>
        <h3 className={"title"}>Actualización de datos personales</h3>
        <p className={"leyenda-firma"}>Firma en el recuadro para terminar el proceso de actualización</p>
        <div className={"contenedor-firma"}>
          {this.state.estaFirmando ? <div className={"trash-firma"}><span className={"icon-trash"} onClick={this.borrarFirma} ><FaTrash />{" "} Borrar todo</span></div> : <div className={"trash-firma"}></div> }
            <div className={this.state.clase} onClick={this.handleFirma}>
              <SignaturePad
                ref={ref => this.signaturePad = ref}
                width={800}
                height={400}
                penColor={"#000"}
              />
            </div>
        </div>
        <p className={"leyenda-firma"}>Al presionar aceptar, estás aceptando nuestra Política de manejo de datos personales</p>
        <FormGroup className={"form-button-firma"}>
         {this.state.estaFirmando ? <Button color={"success"}>Aceptar</Button> : <Button disabled>Aceptar</Button> }
          <Button>Cancelar</Button>
        </FormGroup>
      </div>
    );
  }
}

export default Firma;
