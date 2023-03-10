import "./reviewpopup.css";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ReviewForm from "./ReviweForm/ReviewForm";
import { Link } from "react-router-dom";

const ReviewPopUp = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader>
                    <h3 className="CompraH3">Muchas Gracias por su compra!</h3>
                </ModalHeader>

                <ModalBody>
                    <p className="pcompra">Para finalizar nos gustaria molestarlos con una breve encuesta (no es obligatoria)</p>
                    <ReviewForm/>
                </ModalBody>

                <ModalFooter>
                    <Link to="/">
                        <Button color="secondary" onClick={toggleModal}>Inicio</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ReviewPopUp;
