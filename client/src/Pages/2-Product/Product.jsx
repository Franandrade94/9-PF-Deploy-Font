import "./product.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav3";
import BurgerMenu from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter";
import ProductCardContainer from "../../Components/5-Productcard/ProductCardContainer";


export default class Products extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="ProductsPage">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu/> 
                    <ProductCardContainer location={this.props.location}/>               
                </div>
            </div>
        )
    }
}