import "./welcomepopup.css";
import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

class WelcomePopUp extends Component {
    state = {
        abierto: true,
    }

    abrirModal = () => {
        this.setState({abierto: !this.state.abierto});
    }

    render(){

        const modalStyles={
            position: "absolut",
            top: "50%",
            "margin-left": "50%",
            "text-align": "center",
            transform: "translate(-50%, -50%)"
        }

        return(
            <>
                
                <Modal className="PopUp-Container" isOpen={this.state.abierto} style={ modalStyles }>
                
                    <ModalHeader>
                        <div className="PopUp-Header">
                            <h2>Bienvenido a Bonita Devoto</h2>    
                        </div>
                    </ModalHeader>
                    
                    <ModalBody>
                        <div className="PopUp-Body">
                            <p>
                                Para activar el carrito de compras inicie sesion.
                                <br/><br/>
                                Su maceta ideal esta a un click de  distancia.
                            </p>
                        </div>   
                    </ModalBody>   
                        
                    <ModalFooter>
                        <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

};

export default WelcomePopUp;
