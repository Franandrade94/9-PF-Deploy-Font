import "./buttonsusers.css";
import React from "react";
import ButtonLogIn from "./1-ButtonLogIn/ButtonLogIn";
import { useAuth0 } from "@auth0/auth0-react";
import img from "../../Images/user.png";
import Profile from "../../Pages/5-Profile/Profile";
import ButtonLogOut from "./2-ButtonLogOut/ButtonLogOut";

const ButtonsUsers = () => {
    
    const{ isAuthenticated } = useAuth0();

    return(
        <div className="ButtonUsersContainer">
            <img alt="" src={img}/>
            {
                isAuthenticated ?
                    <>
                        <Profile/>
                        <ButtonLogOut/>
                    </> :

                <ButtonLogIn/>
            }
        </div>
    )
};

export default ButtonsUsers;