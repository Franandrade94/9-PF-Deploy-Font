import "./colgantes.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu2 from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter2";
import ColgantesComponent from "../../Components/5-Productcard/4-Colgantes/Colgantes"

export default class Colgantes extends Component {
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu2/> 
                    <ColgantesComponent location={this.props.location}/>               
                </div>
            </div>
        )
    }
}