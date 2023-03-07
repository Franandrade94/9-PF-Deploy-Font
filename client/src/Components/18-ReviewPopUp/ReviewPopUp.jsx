import "./reviewpopup.css";
import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ReviewForm from "./ReviweForm/ReviewForm";


class ReviewPopUp extends Component {
    state = {
        abierto: true,
    }

    abrirModal = () => {
        this.setState({abierto: !this.state.abierto});
    }

    
    render(){
        return(
            <>
                
                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                        <h3 className="CompraH3">Muchas Gracias por su compra!</h3>
                    </ModalHeader>

                    <ModalBody>
                        <p className="pcompra">Para finalizar nos gustaria molestarlos con una breve encuesta (no es obligatoria)</p>
                        <ReviewForm/>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="secondary" onClick={this.abrirModal}>Inicio</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

};

export default ReviewPopUp;
