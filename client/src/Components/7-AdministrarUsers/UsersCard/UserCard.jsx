import "./usercard.css";
import React from "react";


const UserCard = (props) => {

    const { name, image, admin } = props;

    return (
        <div className="AllProducts">
            <div className="product-Container">
                <div>
                    <p className="productName">{name}</p>
                    <p className="">{image}</p>
                    <p>{admin}</p>
                </div>
                
            </div>
        </div>
    )
};

export default  UserCard;