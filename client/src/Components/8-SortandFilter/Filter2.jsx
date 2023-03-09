import "./filter.css";
import React, { Component } from "react";

export default class Filter2 extends Component {


    constructor(props){
        super(props)
        this.state = {
            types: [],
            priceRange: []
        }

        this.sortAction = this.sortAction.bind(this)
        this.addPriceRange = this.addPriceRange.bind(this)
    }

    sortAction() {
        let priceRange = this.state.priceRange.join(',')
        
        window.location.replace(window.location.href.split('?')[0] + `?pricerange=${priceRange}`)
    }

    addPriceRange(e){
        let _priceRange = this.state.priceRange

        if(e.target.name === 'min_pricerange'){
            _priceRange[0] = e.target.value
        }
        if(e.target.name === 'max_pricerange'){
            _priceRange[1] = e.target.value
        }
        this.setState({...this.state,priceRange:_priceRange})
    }
    
    render() {
        return (

            <div className="Filter">                
                <div className="preciodiv">
                    Precio<br/><br/>
                    <label className="MinPrice">
                        Min
                        <input name="min_pricerange" type="number" step=".01" onChange={(e)=> this.addPriceRange(e)}/>
                    </label>
                    <label className="MaxPrice">
                        Max
                        <input  name="max_pricerange" type="number" step=".01" onChange={(e)=> this.addPriceRange(e)}/>
                    </label>
                </div>

                <button className="FilterButton" type="submit" onClick={()=>this.sortAction()}>
                    Filtrar
                </button>
            </div>
        )

    }
}