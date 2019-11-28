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
      <Modal isOpen={true} toggle={this.toggleModal} scrollable={true}>
        <ModalHeader
          cssModule={{ "modal-title": "w-100 text-center" }}
          toggle={this.toggleModal}
        >
          {window.AVISO[0].Text}
        </ModalHeader>
        <ModalBody>
          {window.AVISO.map(function(item, key) {
            if (item === window.AVISO[0]) {
              return <p></p>;
            }
            return item.IsTitle ? (
              <p style={{ fontSize: 14 }}>{item.Text}</p>
            ) : (
              <p style={{ fontSize: 12 }}>{item.Text}</p>
            );
          })}
          <FormGroup check>
            <Label check>
              <Input
                className={"checkGrande"}
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
