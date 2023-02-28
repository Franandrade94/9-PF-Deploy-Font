import "./sinstock.css";
import React from "react";
import sinstock from "../../Images/sinstock.png"

export default function SinStock() {
    return(
        <div className="Sinstock">
            <div className="">
                <img alt="" src={sinstock}/>
            </div>
        </div>
    )
}
