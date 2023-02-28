import "./animales.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter";
import AnimalesComponent from "../../Components/5-Productcard/1-Animales/Animales"

export default class Animales extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu/> 
                    <AnimalesComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}