import "./nav.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link className="link" to="/">Inicio</Link>
                <Link to="" className="link">Nosotras</Link>
                <Link to="/products" className="link-P">
                    Productos   
                    <p className="flecha">▼</p>
                    <ul className="All-Products">
                        <li>
                            <Link className="navLinkAnimales" to="/products/animales">Animales</Link>
                        </li>
                        <li>
                            <Link className="navLinkBizcocho" to="/products/bizcocho">Bizcocho Cerámico</Link>
                        </li>
                        <li>
                            <Link className="navLinkCemento" to="/products/cemento">Cemento</Link>
                        </li>
                        <li>
                            <Link className="navLinkColgante" to="/products/colgantes">Colgantes</Link>
                        </li>
                        <li>
                            <Link className="navLinkFridas" to="/products/fridas">Fridas & Baby</Link>
                        </li>
                        <li>
                            <Link className="navLinkOtros" to="/products/otros">Otros</Link>
                        </li>
                    </ul>
                </Link>
                <Link to="" className="link">Ofertas</Link>
                <Link to="" className="link">Contacto</Link>
            </div>
        )
    }
}