import "./nav3.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav3 extends Component {
    render() {
        return (
            <div className="nav3">
                <Link className="link3" to="/">Inicio</Link>
                <Link to="" className="link3">Nosotras</Link>
                <Link to="/products" className="link-P3">
                    Productos   
                    <p className="flecha3">▼</p>
                    <ul className="All-Products3">
                        <li>
                            <Link className="navLinkAnimales3" to="/products/animales">Animales</Link>
                        </li>
                        <li>
                            <Link className="navLinkBizcocho3" to="/products/bizcocho">Bizcocho Cerámico</Link>
                        </li>
                        <li>
                            <Link className="navLinkCemento3" to="/products/cemento">Cemento</Link>
                        </li>
                        <li>
                            <Link className="navLinkColgante3" to="/products/colgantes">Colgantes</Link>
                        </li>
                        <li>
                            <Link className="navLinkFridas3" to="/products/fridas">Fridas & Baby</Link>
                        </li>
                        <li>
                            <Link className="navLinkOtros3" to="/products/otros">Otros</Link>
                        </li>
                    </ul>
                </Link>
                <Link to="" className="link3">Ofertas</Link>
                <Link to="" className="link3">Contacto</Link>
            </div>
        )
    }
}