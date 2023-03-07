import "./reviewpopup.css";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ReviewForm from "./ReviweForm/ReviewForm";

const ReviewPopUp = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    <h3 className="CompraH3">Muchas Gracias por su compra!</h3>
                </ModalHeader>

                <ModalBody>
                    <p className="pcompra">Para finalizar nos gustaria molestarlos con una breve encuesta (no es obligatoria)</p>
                    <ReviewForm/>
                </ModalBody>

                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Inicio</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ReviewPopUp;
