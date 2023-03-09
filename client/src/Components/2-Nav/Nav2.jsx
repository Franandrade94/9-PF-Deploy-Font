import "./nav2.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default class Nav2 extends Component {

    scrollToContacto = () => {
        scroll.scrollTo(document.getElementById("contacto").offsetTop);
      };
    
      scrollToNosotras = () => {
        scroll.scrollTo(document.getElementById("nosotras").offsetTop);
      };

    render() {
        return (
            <div className="nav2">
                <Link className="link2" to="/">Inicio</Link>
                <Link to="/" className="link2">Nosotras</Link>
                <Link to="/products" className="link-P2">
                    Productos ▼
                    <ul className="All-Products2">
                        <li>
                            <Link className="navLinkAnimales2" to="/products/animales">Animales</Link>
                        </li>
                        <li>
                            <Link className="navLinkBizcocho2" to="/products/bizcocho">Bizcocho Cerámico</Link>
                        </li>
                        <li>
                            <Link className="navLinkCemento2" to="/products/cemento">Cemento</Link>
                        </li>
                        <li>
                            <Link className="navLinkColgante2" to="/products/colgantes">Colgantes</Link>
                        </li>
                        <li>
                            <Link className="navLinkFridas2" to="/products/fridas">Fridas & Baby</Link>
                        </li>
                        <li>
                            <Link className="navLinkOtros2" to="/products/otros">Otros</Link>
                        </li>
                    </ul>
                </Link>
                <Link to="/" className="link2">Contacto</Link>
            </div>
        )
    }
}