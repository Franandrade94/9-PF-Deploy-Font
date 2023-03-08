import "./nav.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default class Nav extends Component {
  
    scrollToContacto = () => {
    scroll.scrollTo(document.getElementById("contacto").offsetTop);
  };

  scrollToNosotras = () => {
    scroll.scrollTo(document.getElementById("nosotras").offsetTop);
  };

  render() {
    return (
      <div className="nav">
        <Link className="link" to="/">
          Inicio
        </Link>
        <Link onClick={this.scrollToNosotras} className="link">
          Nosotras
        </Link>
        <Link to="/products" className="link-P">
          Productos ▼
          
          <ul className="All-Products">
            <li>
              <Link className="navLinkAnimales" to="/products/animales">
                Animales
              </Link>
            </li>
            <li>
              <Link className="navLinkBizcocho" to="/products/bizcocho">
                Bizcocho Cerámico
              </Link>
            </li>
            <li>
              <Link className="navLinkCemento" to="/products/cemento">
                Cemento
              </Link>
            </li>
            <li>
              <Link className="navLinkColgante" to="/products/colgantes">
                Colgantes
              </Link>
            </li>
            <li>
              <Link className="navLinkFridas" to="/products/fridas">
                Fridas & Baby
              </Link>
            </li>
            <li>
              <Link className="navLinkOtros" to="/products/otros">
                Otros
              </Link>
            </li>
          </ul>
        </Link>
        <Link onClick={this.scrollToContacto} className="link">
          Contacto
        </Link>
      </div>
    );
  }
}