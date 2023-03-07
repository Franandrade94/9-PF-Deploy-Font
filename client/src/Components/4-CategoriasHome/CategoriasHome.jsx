import "./categoriashome.css";
import React from "react";
import { Link } from "react-router-dom";


const CategoriasHome = () => {
    return(
        <div className="categoriasHome-component">
                <h2 className="ShopProduct">Shop by Product</h2>
            <div className="CategoriasButton">
                <Link to="/products/animales">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161743/g7lgmfedhjx9tnbwwcih.png"/></button>
                </Link>

                <Link to="/products/bizcocho">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161743/ouvmtjffczmxvaugdydj.png"/></button>
                </Link>

                <Link to="/products/cemento">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161743/bqmwegikwgl9frzlvetc.png"/></button>
                </Link>

                <Link to="/products/colgantes">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161743/pkkpplafkrxf2xn7dknq.png"/></button>
                </Link>

                <Link to="/products/fridas">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161743/ro1pdyqtrzse6thpquoj.png"/></button>
                </Link>

                <Link to="/products/otros">
                    <button><img alt="" src="https://res.cloudinary.com/diw3vl6dr/image/upload/v1678161742/afkavonx9eycldezvcnc.png"/></button>
                </Link>
            </div>
        </div>
    )
}

export default CategoriasHome;
