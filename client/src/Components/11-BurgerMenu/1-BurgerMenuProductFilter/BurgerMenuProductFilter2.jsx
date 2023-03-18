import "./burgermenuproductfilter.css";
import React, { useState } from "react";
import SortMenu2 from "./SortMenu/BurgerMenuSort2";
import { FiFilter } from "react-icons/fi";


export default function BurgerMenuProdcutFilter()  {

    const [burger_class, setBurgerClass] = useState("burger-bar2 unclicked")
    const [menu_class, setMenuClass] = useState("menu2 hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar2 clicked")
            setMenuClass("menu2 visible")
        }
        else {
            setBurgerClass("burger-bar2 unclicked")
            setMenuClass("menu2 hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div>
           <nav className="filterNav">
                <div className="burger-menu2">
                <div className={burger_class} onClick={updateMenu}>
                        <button className="filter-btn"><FiFilter className="filter-icon"/>Filtrar</button>
                    </div>
                </div>
            </nav>
            <div className={menu_class}>
                <SortMenu2/>
            </div>
        </div>
    )
}
