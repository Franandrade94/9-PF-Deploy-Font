import "./buttonlogout.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonLogOut = () => {
    const { logout } = useAuth0();

    return (
        <div className="LogOutButton">
            <button className="outBut" onClick={() => logout({ 
                returnTo: window.location.origin 
                },
                localStorage.removeItem('user')
            )}>LogOut</button>
        </div>
    )
};

export default ButtonLogOut;

