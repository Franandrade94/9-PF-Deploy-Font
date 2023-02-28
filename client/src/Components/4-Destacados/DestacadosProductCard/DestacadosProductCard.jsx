import "./destacadosproductcard.css";
import React from "react";
import { Link } from "react-router-dom";


const DestacadosProdcutCard = (props) => {
    return (
        <div className="AllDestacadosProducts">
            <div className="destacados-product-Container">
                <div>
                    <Link to={`/products/details/${props.id}`}>
                    <img src={props.image} alt="" />
                    </Link>
                    <p className="destacadosproductName">{props.name}</p>
                    <p className='destacadosproductPrice'>${props.price}</p>  
                    <button className='destacadosproductCarrito'>agregar al carrito</button>
                </div>
            </div>
        </div>
    )
};

export default  DestacadosProdcutCard;