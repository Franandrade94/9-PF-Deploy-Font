import "./buttonlogin.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react"

const ButtonLogIn = () => {
    
    const{ loginWithRedirect } = useAuth0();

    return (
        <div className="LogInButton">
            <button onClick={() => loginWithRedirect()}>LogIn</button>

        </div>
    )
}

export default ButtonLogIn;