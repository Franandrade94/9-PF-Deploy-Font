import "./productcard.css";
import React from "react";
import { Link } from "react-router-dom";
import sinstock from "../../../Images/sinstock.png"

const ProductCard = (props) => {

    const { id, name, image, price, handleCarrito } = props;

    const addToCart = () => {
        handleCarrito(id);
    }

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
                    <Link to={`/products/details/${id}`}>
                    <img src={props.image} alt="" />
                    </Link>
                    <p className="productName">{name}</p>
                    <p className='productPrice'>${price}</p>  
                    <button className='productCarrito' onClick={ addToCart }>agregar al carrito</button>
                </div>)
                }
            </div>
        </div>
    )
};

export default  ProductCard;