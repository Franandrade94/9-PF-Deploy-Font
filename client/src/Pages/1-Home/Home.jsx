import "./home.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo";
import Nav from "../../Components/2-Nav/Nav";
import ButtonsUsers from "../../Components/14-ButtonsUsers/ButtonsUsers";
import VideoHome from "../../Components/3-VideoHome/VideoHome";
import Destacados from "../../Components/4-Destacados/Destacados";
import ReviewCardContainer from "../../Components/19-ReviewCardContainer/ReviewCardContainer";
import CategoriasHome from "../../Components/4-CategoriasHome/CategoriasHome";
import { Link } from "react-router-dom";
import Contacto from "../../Components/4-Contacto/Contacto";
import Nosotras from "../../Components/4-Nosotras/Nosotras";



export default class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    {/* <ButtonsUsers/> */}
                    <Logo/>
                    <Nav/>
                    <Link to="/products">
                        <VideoHome/>
                    </Link>
                    <Destacados/>
                    <img className="Imagen-home" alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678159515/slekubeymnsclq99dt7o.jpg"/>
                    <CategoriasHome/>
                    <ReviewCardContainer/>
                    <div>
                        <Nosotras/>
                    </div>
                    <div id="contacto">
                        <Contacto />
                    </div>  
                </div>
            </div>
        )
    }
}