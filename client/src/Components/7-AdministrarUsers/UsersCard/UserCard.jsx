import "./usercard.css";
import React from "react";


const UserCard = (props) => {

    const { name, image, admin, email } = props;

    return (
        <div className="AllProducts">
            <div className="product-Container">
                <div>
                    <img src={image} alt=''/>
                    <p className="productName">{name}</p>
                    <p>{email}</p>
                    <p>{admin}</p>
                </div>
                
            </div>
        </div>
    )
};

export default  UserCard;