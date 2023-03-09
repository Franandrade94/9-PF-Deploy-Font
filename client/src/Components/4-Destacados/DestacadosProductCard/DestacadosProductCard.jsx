import "./destacadosproductcard.css";
import React from "react";
import { Link } from "react-router-dom";


const DestacadosProdcutCard = (props) => {

    const { id, name, image, price, handleSacarCarrito, handleAgregarCarrito, carrito } = props;

    const addToCart = () => {
        handleAgregarCarrito(id);
    }

    const deleteToCart = () => {
        handleSacarCarrito(id);
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
                    {carrito === false ? <button className='destacadosproductCarrito' onClick={ addToCart }>agregar al carrito</button> : <button className='destacadossacarproductCarrito' onClick={ deleteToCart }>sacar del carrito</button>}
                </div>
            </div>
        </div>
    )
};

export default  DestacadosProdcutCard;