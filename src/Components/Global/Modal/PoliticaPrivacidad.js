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
        <Modal isOpen={true} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Política de tratamiento de datos
          </ModalHeader>
          <ModalBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
      </div>
    );
  }
}

export default PoliticaPrivacidad;
