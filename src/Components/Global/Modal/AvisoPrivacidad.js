import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class AvisoPrivacidad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  componentDidMount = () => {
    this.setState({
      isChecked: this.props.checkAviso
    });
  };

  toggleModal = () => {
    this.props.ocultarModal();
  };

  handleChecked = () => {
    const { isChecked } = this.state;
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
    this.props.checkModalAviso(!isChecked);
  };

  render() {
    return (
      <Modal isOpen={true} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Aviso de privacidad</ModalHeader>
        <ModalBody>
          <p style={{ fontSize: 10 }}>
            SUPERTIENDAS Y DROGUERÍAS OLÍMPICA S.A. informa, que los datos
            personales recolectados resultado del interés del titular de ser
            usuario de la Tarjeta Plata, serán tratados para las siguientes
            finalidades:
          </p>
          <ol type="I" style={{ fontSize: 10 }}>
            <li>
              Otorgamiento de los beneficios vigentes en un momento determinado
              como usuario del programa de fidelización Tarjeta Plata, sin
              perjuicio de otros programas de esta naturaleza.
            </li>
            <li>
              Gestionar y fidelizar el relacionamiento con SUPERTIENDAS Y
              DROGUERÍAS OLÍMPICA S.A.
            </li>
            <li>
              Remitir via fisica, electronica o telefonica, información
              comercial sobre bienes, servicios, actividades, sorteos,
              promociones, sean estos propios y/o de socios de negocios.
            </li>
            <li>
              Crear valores a los usuarios de los programas de fidelización como
              la Tarjeta Plata y a los grupos de interés, a partir de la
              evaluación propectiva de gustos, preferencias, tendencias.
            </li>
            <li>
              Cumplir de forma recíproca con las obligaciones originadas en la
              aceptación del reglamento de la Tarjeta Plata y/o en la ley.
            </li>
          </ol>
          <p style={{ fontSize: 10 }}>
            El uso de la Tarjeta Plata en las transacciones por parte de los
            usuarios permite a estos:
          </p>
          <ol type="a" style={{ fontSize: 10 }}>
            <li>Participar en los sorteos.</li>
            <li>Realizar el sorteo promocional respectivo.</li>
            <li>
              Cumplir con las obligaciones relacionadas con la realización de
              sorteo.
            </li>
            <li>
              Comunicar al publico los resultados del sorteo, sea a tráves de
              los medios de comunicación, impresos o virtuales que se definan
              segun cada sorteo.
            </li>
            <li>
              Mantener de forma periórica contacto comercial con los
              participantes del sorteo.
            </li>
            <li>
              Remitir información publicitaria sobre bienes, servicios,
              actividades, sean estos propios y/o de socios de negocios.
            </li>
          </ol>
          <p style={{ fontSize: 10 }}>
            El tratamiento de datos personales por parte de esta empresa se
            realizará en cumplimiento de la política de privacidad
            http://www.olimpica.com/wp-content/protecciondedatospersonales.pdf y
            la normatividad adoptada para dar cumplimiento a lo dispuesto en la
            Ley 1581 de 2012. Esta empresa prsume que la información personal
            suministrada es verz y ha sido entregada por el titular de esta y/o
            su represenante, o persona autorizada. Los datos personales serán
            tratados de forma segura por la empresa, pudiendo tratar estos
            dentro o fuera del territorio colombiano, en paises como puede ser
            Estados Unidos o establecidos en Europa. Cualquier consulta, reclamo
            o ejercicio del Habeas Data, debe ser ealizado a través de los
            siguiente canales: Correo electrónico: habeasdata@olimpica.com o
            mediane comunicación escrita dirigida a HABEAS DATA SUPERTIENDAS Y
            DROGUERÍAS OLIMPICA S.A, a la siguiente dirección: calle 53 Nº. 46 -
            192 piso 3, Barranquilla.
          </p>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                onChange={this.handleChecked}
                checked={this.state.isChecked}
              />{" "}
              HE LEÍDO Y ACEPTO LOS TÉRMINOS Y CONDICIONES
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {this.state.isChecked ? (
            <Button className={"btnModalOK"} onClick={this.toggleModal}>
              Ok
            </Button>
          ) : (
            <Button color={"secondary"} disabled>
              Ok
            </Button>
          )}
        </ModalFooter>
      </Modal>
    );
  }
}

export default AvisoPrivacidad;
