import "./fridas&baby.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu2 from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter2";
import FridasComponent from "../../Components/5-Productcard/5-Fridas&Baby/Fridas&Baby"

export default class FridasyBaby extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu2/> 
                    <FridasComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}