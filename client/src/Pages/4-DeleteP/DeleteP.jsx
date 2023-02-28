import "./deletep.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav2";
import DeleteProduct from "../../Components/7-DeleteProduct/DeleteProduct";

export default class DeleteP extends Component {
    render(){
        return(
            <div className="Create">
                <div>
                    <Logo/>
                    <Nav/>
                    <DeleteProduct location={this.props.location}/>
                </div>
            </div>
        )
    }
};