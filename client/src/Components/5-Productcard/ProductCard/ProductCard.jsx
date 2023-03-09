import "./productcard.css";
import React from "react";
import { Link } from "react-router-dom";
import sinstock from "../../../Images/sinstock.png"

const ProductCard = (props) => {

    const { id, name, image, price, handleSacarCarrito, handleAgregarCarrito, carrito } = props;

    const addToCart = () => {
        handleAgregarCarrito(id);
    }

    const deleteToCart = () => {
        handleSacarCarrito(id);
    }

    const users = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="AllProducts">
            <div className="product-Container">
 
            {(props.quantity === 0) ? 
                ((<div>
                    <img className="SinStockImg" alt="" src={sinstock}/>
                    
                    <Link to={`/products/${props.id}`}>
                        <img src={image} alt="" />
                    </Link>
                    <p className="productName">{name}</p>
                    <p className='productPrice'>${price}</p>  
                    
                </div>)) :  
 
                (<div>
                    <Link to={`/product/details/${id}`}>
                    <img src={props.image} alt="" />
                    </Link>
                    <p className="productName">{name}</p>
                    <p className='productPrice'>${price}</p>  
                   { (users?.admin === false)  && ( carrito === false ? <button className='productCarrito' onClick={ addToCart }>agregar al carrito</button> : <button className='sacarproductCarrito' onClick={ deleteToCart }>sacar del carrito</button>)}
                </div>)
                }
            </div>
        </div>
    )
};

export default  ProductCard;