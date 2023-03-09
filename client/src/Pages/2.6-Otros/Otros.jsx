import "./otros.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu2 from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter2";
import OtroComponent from "../../Components/5-Productcard/6-Otros/Otros"

export default class Otros extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu2/> 
                    <OtroComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}