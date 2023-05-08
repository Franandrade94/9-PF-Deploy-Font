import "./contacto.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsInstagram, BsGoogle } from "react-icons/bs";

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
            <h2 className="contactoH4">Contacto</h2>
            
            <div className="contacto-Container">
                <Link className="Link-Icon" onClick={ handleClickWapp }>
                    <BsWhatsapp className="contact-icon"/>
                </Link>
                
                <Link className="Link-Icon" onClick={ handleClickInsta }>
                    <BsInstagram className="contact-icon"/>
                </Link>
                
                <Link className="Link-Icon" onClick={ handleClickFacebook }>
                    <BsFacebook className="contact-icon"/>
                </Link>      

                <Link onClick={() => window.location = 'mailto:bonitadevoto@gmail.com'}>
                    <BsGoogle className="contact-icon"/>
                </Link>          
            </div>
        </div>
    )   
}

export default Contacto;