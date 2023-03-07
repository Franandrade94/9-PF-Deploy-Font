import "./usercard.css";
import React from "react";


const UserCard = (props) => {

    const { name, image, email } = props;

    return (
        <div className="Allusers">
            <div className="user-Container">
                <div>
                    {/* {console.log({image}, "soyimagen")} */}
                    <img className="userImage" src={image} alt=''/>
        
                    <h2 className="userName">{name}</h2>
                    
                    <h4 className="userEmail">{email}</h4>
               </div> 
            </div>
        </div>
    )
};

export default  UserCard;