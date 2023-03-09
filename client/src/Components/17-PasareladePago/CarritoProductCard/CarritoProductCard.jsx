import "./carritoproductcard.css";
import React from "react";

const CarritoProductCard = (props) => {

    const { id, name, price, handleCarrito } = props;

    const addToCart = () => {
        handleCarrito(id);
    }
    return (
        <div className="AllCarritoProducts">
            <div className="Carritoproduct-Container">
                <div>
                    <img src={props.image} alt="" />
                    <p className="carritoproductName">{name}</p>
                    <p className='carritoproductPrice'>${price}</p>  
                    <button className='carritoproductadd' onClick={ addToCart }>x</button>
                </div>
            </div>
        </div>
    )
};

export default  CarritoProductCard;