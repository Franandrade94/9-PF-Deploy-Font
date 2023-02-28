import "./filter.css";
import React, { Component } from "react";

export default class Filter extends Component {


    constructor(props){
        super(props)
        this.state = {
            types: [],
            priceRange: []
        }

        this.addType = this.addType.bind(this)
        this.sortAction = this.sortAction.bind(this)
        this.addPriceRange = this.addPriceRange.bind(this)
    }

    sortAction() {
        let types = this.state.types.join(',')
        let priceRange = this.state.priceRange.join(',')

        window.location.replace(window.location.href.split('?')[0] + `?types=${types}&pricerange=${priceRange}`)
    }

    addPriceRange(e){
        let _priceRange = this.state.priceRange

        if(e.target.name == 'min_pricerange'){
            _priceRange[0] = e.target.value
        }
        if(e.target.name == 'max_pricerange'){
            _priceRange[1] = e.target.value
        }
        this.setState({...this.state,priceRange:_priceRange})
    }

    addType(t){

        let _types = this.state.types
        if(_types.indexOf(t) == -1){
            _types.push(t)
        }else {
            _types = _types.filter(types => types != t)
        }
        
        this.setState({types: _types})
    }


    
    render() {
        return (

            <div className="Filter">
                <p>Categorias</p>
                <ul className="FilterUl">
                    <li>
                        <label>
                            Animales
                            <input type="checkbox"  onChange={()=>this.addType(1)}/>
                        </label>
                    </li>

                    <li>
                        <label>
                            Bizcocho Ceramico
                            <input type="checkbox"  onChange={()=>this.addType(2)} />
                        </label>
                    </li>

                    <li>
                        <label>
                            Cemento
                            <input type="checkbox" onChange={()=>this.addType(3)}/>
                        </label>
                    </li>

                    <li>
                        <label>
                            Colgantes
                            <input type="checkbox" onChange={()=>this.addType(4)}/>
                        </label>
                    </li>

                    <li>
                        <label>
                            Fridas & Babies
                            <input type="checkbox" onChange={()=>this.addType(5)}/>
                        </label>
                    </li>

                    <li>
                        <label>
                            Otros
                            <input type="checkbox" onChange={()=>this.addType(6)}/>
                        </label>
                    </li>
                </ul>

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