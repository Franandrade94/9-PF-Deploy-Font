import "./cemento.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter";
import CementoComponent from "../../Components/5-Productcard/3-Cemento/Cemento"

export default class Cemento extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu/> 
                    <CementoComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}