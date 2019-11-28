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

class PoliticaPrivacidad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  componentDidMount = () => {
    this.setState({
      isChecked: this.props.checkPolitica
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
    this.props.checkModalPrivacidad(!isChecked);
  };

  render() {
    return (
      <div>
        <Modal isOpen={true} toggle={this.toggleModal} scrollable={true}>
          <ModalHeader
            cssModule={{ "modal-title": "w-100 text-center" }}
            toggle={this.toggleModal}
          >
            {window.POLITICA[0].Text}
          </ModalHeader>
          <ModalBody>
            {window.POLITICA.map(function(item, key) {
              if (item === window.POLITICA[0]) {
                return <p></p>;
              }
              return item.Title ? (
                <p style={{ fontSize: 14 }}>{item.Text}</p>
              ) : (
                <p style={{ fontSize: 11 }}>{item.Text}</p>
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
      </div>
    );
  }
}

export default PoliticaPrivacidad;
