import "./notfound.css";
import React from "react";
import NotImg from "../../Images/cactustriste.png"

export default function NotFound() {
    return(
        <div className="NotFound">
            <div className="Not-container">
                <img alt="" src={ NotImg }/>
                <h2>Ups!! Product Not Found</h2>
            </div>
        </div>
    )
}
