import "./adminuser.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav2";
import AdminstrarUsers from "../../Components/7-AdministrarUsers/AdminstrarUsers";

export default class DeleteP extends Component {
    render(){
        return(
            <div className="Create">
                <div>
                    <Logo/>
                    <Nav/>
                    <AdminstrarUsers/>
                </div>
            </div>
        )
    }
};