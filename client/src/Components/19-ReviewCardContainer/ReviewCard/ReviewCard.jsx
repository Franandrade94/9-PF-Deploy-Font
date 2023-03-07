import "./reviewcard.css";
import React from "react";


const ReviewCard = (props) => {

    const { name, productname, comment } = props;

    return (
        <div className="Allreviews">
            <div className="review-Container">
                <div>        
                <h2 className="ReviewProductName">{productname}</h2>
                    
                    <h4 className="ReviewComment">"{comment}"</h4>

                    <h2 className="ReviewName">{name}</h2>
               </div> 
            </div>
        </div>
    )
};

export default  ReviewCard;