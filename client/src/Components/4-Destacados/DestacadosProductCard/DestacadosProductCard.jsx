import "./destacadosproductcard.css";
import React from "react";
import { Link } from "react-router-dom";


const DestacadosProdcutCard = (props) => {

    const { id, name, image, price, handleCarrito } = props;

    const addToCart = () => {
        handleCarrito(id);
    }

    return (
        <div className="AllDestacadosProducts">
            <div className="destacados-product-Container">
                <div>
                    <Link to={`/product/details/${id}`}>
                    <img src={image} alt="" />
                    </Link>
                    <p className="destacadosproductName">{name}</p>
                    <p className='destacadosproductPrice'>${price}</p>  
                    <button className='destacadosproductCarrito' onClick={ addToCart }>agregar al carrito</button>
                </div>
            </div>
        </div>
    )
};

export default  DestacadosProdcutCard;