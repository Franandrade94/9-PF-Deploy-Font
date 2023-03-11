import "./contacto.css";
import React from "react";
import { Link } from "react-router-dom";
import ButtonMailto from "./MaliTo/MailTo";

const Contacto = () => {

    const handleClickInsta = () => {
        window.open("https://instagram.com/bonitadevoto?igshid=YmMyMTA2M2Y=")
    }

    const handleClickWapp = () => {
        window.open("http://wa.link/0muyjo")
    }

    const handleClickFacebook = () => {
        window.open("https://www.facebook.com/bonitadevoto")
    }

    return(
        <div className="contacto-Home">
            <h4 className="contactoH4">contacto</h4>
            <p className="MailTo">
                <ButtonMailto label="bonitadevoto@gmail.com" mailto="mailto:bonitadevoto@gmail.com" />
            </p>
            <div className="contacto-Container">
                <Link onClick={ handleClickWapp }>
                    <img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678163563/ijwjj3rv9syhqgr2kqn5.png"/>
                </Link>
                
                <Link onClick={ handleClickInsta }>
                    <img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678163563/x0cefhlf1yvm1xuhdxws.png"/>
                </Link>
                
                <Link onClick={ handleClickFacebook }>
                    <img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678163563/meqpq4wykurc7ssjwgcz.png"/>
                </Link>                
            </div>
        </div>
    )   
}

export default Contacto;