import "./botoncrear.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class BotonCrear extends Component {
    render(){
        return(
            <div className="CreateButton">
                <Link className="link-create" to="/product/create">
                    create product
                </Link>
                <Link className="link-create" to="/product/delete">
                    manage products
                </Link>
            </div>
        )
    }
}