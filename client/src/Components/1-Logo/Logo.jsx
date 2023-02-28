import "./logo.css";
import React, { Component } from "react";
import logo from "../../Images/logobonita.jpg"

export default class Logo extends Component {
    render() {
        return (
            <div className="Logo-div">
                <img className="Logo" src={logo} alt="bonita-logo" />
            </div>
        )
    }
} 