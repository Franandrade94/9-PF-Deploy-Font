import "./logo2.css";
import React, { Component } from "react";
import logo from "../../Images/logobonita.jpg";
import { Link } from "react-router-dom";

export default class Logo2 extends Component {
    render() {
        return (
            <div className="Logo-div2">
                <Link to="/">
                    <img className="Logo2" src={logo} alt="bonita-logo" />
                </Link>
            </div>
        )
    }
} 