import "./home.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo";
import Nav from "../../Components/2-Nav/Nav";
import ButtonsUsers from "../../Components/14-ButtonsUsers/ButtonsUsers";
import VideoHome from "../../Components/3-VideoHome/VideoHome";
import Destacados from "../../Components/4-Destacados/Destacados";
import ReviewCardContainer from "../../Components/19-ReviewCardContainer/ReviewCardContainer";
import { Link } from "react-router-dom";


export default class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    <ButtonsUsers/>
                    <Logo/>
                    <Nav/>
                    <Link to="/products">
                        <VideoHome/>
                    </Link>
                    <Destacados/>
                    <ReviewCardContainer/>
                </div>
            </div>
        )
    }
}