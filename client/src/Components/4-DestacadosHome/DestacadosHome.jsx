import "./destacadoshome.css";
import React from "react";
import Animal1 from "../../Ejemplos/1-Destacados/Animales/Animal1";
import Animal2 from "../../Ejemplos/1-Destacados/Animales/Animal2";
import Animal3 from "../../Ejemplos/1-Destacados/Animales/Animal3";
import Bizcocho1 from "../../Ejemplos/1-Destacados/BizcochoCeramico/Bizcochuelo1";
import Bizcocho2 from "../../Ejemplos/1-Destacados/BizcochoCeramico/Bizcochuelo2";
import Bizcocho3 from "../../Ejemplos/1-Destacados/BizcochoCeramico/Bizcochuelo3";
import Cemento1 from "../../Ejemplos/1-Destacados/Cemento/Cemento1";
import Cemento2 from "../../Ejemplos/1-Destacados/Cemento/Cemento2";
import Cemento3 from "../../Ejemplos/1-Destacados/Cemento/Cemento3";
import Colgante1 from "../../Ejemplos/1-Destacados/Colgantes/Colgante1";
import Colgante2 from "../../Ejemplos/1-Destacados/Colgantes/Colgante2";
import Colgante3 from "../../Ejemplos/1-Destacados/Colgantes/Colgante3";


export default function DestacadosHome() {
    
    return(
        <div className="Destacados">
            <div className="Destacados-Home">
                    <h1>Destacados</h1>
                    <div className="slider-Destacados">
                        <ul>
                            <li>
                                <Animal1/>
                            </li>
                            <li>
                                <Bizcocho1/>
                            </li>
                            <li>
                                <Cemento1/>
                            </li>
                            <li>
                                <Colgante1/>
                            </li>
                            <li>
                                <Animal2/>
                            </li>                            
                            <li>
                                <Cemento2/>
                            </li>
                            <li>
                                <Bizcocho2/>
                            </li>
                            <li>
                                <Colgante2/>
                            </li>
                            <li>
                                <Cemento3/>
                            </li>
                            <li>
                                <Bizcocho3/>
                            </li>
                            <li>
                                <Colgante3/>
                            </li>
                            <li>
                                <Animal3/>
                            </li>
                        </ul>

                    </div>
                </div>
        </div>
    )
}