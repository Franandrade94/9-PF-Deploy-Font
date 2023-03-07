import "./buttonsusers.css";
import React from "react";
import ButtonLogIn from "./1-ButtonLogIn/ButtonLogIn";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../Pages/5-Profile/Profile";
import ButtonLogOut from "./2-ButtonLogOut/ButtonLogOut";

const ButtonsUsers = () => {
    
    const{ isAuthenticated } = useAuth0();

    // console.log(JSON.parse(localStorage.getItem('user')), 'LOCAL SOTARE');

    return(
        <div className="ButtonUsersContainer">
            {
                isAuthenticated && JSON.parse(localStorage.getItem('user')) !== undefined ?
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