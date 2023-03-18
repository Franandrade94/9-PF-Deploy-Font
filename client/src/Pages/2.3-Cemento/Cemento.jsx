import "./cemento.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav";
import BurgerMenu2 from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter2";
import CementoComponent from "../../Components/5-Productcard/3-Cemento/Cemento"

export default class Cemento extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu2/> 
                    <CementoComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}