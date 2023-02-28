import "./home.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo";
import Nav from "../../Components/2-Nav/Nav";
import VideoHome from "../../Components/3-VideoHome/VideoHome";
import Destacados from "../../Components/4-Destacados/Destacados";
import ButtonsUsers from "../../Components/14-ButtonsUsers/ButtonsUsers";


export default class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    <ButtonsUsers/>
                    <Logo/>
                    <Nav/>
                    <VideoHome/>
                    <Destacados/>
                </div>
            </div>
        )
    }
}