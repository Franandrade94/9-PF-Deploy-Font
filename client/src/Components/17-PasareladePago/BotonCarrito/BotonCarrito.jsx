import "./botoncarrito.css";
import React, { Component } from "react";
import img from "../../../Images/carrito.png";
import { useState } from "react";
import ProductosCarrito from "../ProductosCarrito/ProductosCarrito";



export default function BotonCarrito(location)  {

    const [burger_class5, setBurgerClass5] = useState("burger-bar5 unclicked")
    const [menu_class5, setMenuClass5] = useState("menu5 hidden")
    const [isMenuClicked5, setIsMenuClicked5] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked5) {
            setBurgerClass5("burger-bar5 clicked")
            setMenuClass5("menu5 visible")
        }
        else {
            setBurgerClass5("burger-bar5 unclicked")
            setMenuClass5("menu5 hidden")
        }
        setIsMenuClicked5(!isMenuClicked5)
    }

    return(
        <div>
           <nav className="carritoNav">
                <div className="burger-menu5">
                    <div onClick={updateMenu}>
                        <button className="carrito-btn">
                            <img 
                                className="carritoIMG" 
                                alt="" 
                                src={img}
                            />
                        </button>
                    </div>
                </div>
            </nav>
            <div className={menu_class5}>
                <ProductosCarrito location={location}/>
            </div>
        </div>               

    )
}