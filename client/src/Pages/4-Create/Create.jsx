import "./create.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav2";
import CreateProduct from "../../Components/7-CreateProduct/CreateProducts";

export default class Create extends Component {
    render(){
        return(
            <div className="Create">
                <div>
                    <Logo/>
                    <Nav/>
                    <CreateProduct/>
                </div>
            </div>
        )
    }
};