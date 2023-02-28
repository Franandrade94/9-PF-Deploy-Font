import "./sort.css";
import React, { Component } from "react";

export default class Sort extends Component {

    constructor(props) {
        super(props)
        this.sortAction = this.sortAction.bind(this)
    }

    sortAction(f) {
        window.location.replace(window.location.href.split('?')[0] + `?orderby=${f}`)
    }

    render() {
        return (

            <div className="sort">
               <ul>
                    <li>
                        <button onClick={() => this.sortAction('max_rating')}>Más relevantes</button>
                    </li>

                    <li>
                        <button onClick={() => this.sortAction('min_price')}>Menor Precio</button>     
                    </li> 
                
                    <li>
                        <button onClick={() => this.sortAction('max_price')}>Mayor Precio</button>
                    </li>
                </ul>
            </div>
        )

    }
}