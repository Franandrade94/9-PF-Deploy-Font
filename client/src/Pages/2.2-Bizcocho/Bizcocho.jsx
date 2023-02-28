import "./bizcocho.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter";
import BizcochoComponent from "../../Components/5-Productcard/2-Bizcocho/Bizcocho"

export default class Bizocho extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu/> 
                    <BizcochoComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}