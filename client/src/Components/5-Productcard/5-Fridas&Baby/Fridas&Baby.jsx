import "./fridas&baby.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/index";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../6-Loading/Loading";

class FrindasyBaby extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        const search = this.props.location.search;
        let orderby = new URLSearchParams(search).get('orderby');
        let types = new URLSearchParams(search).get('types');
        let pricerange = new URLSearchParams(search).get('pricerange');
        this.props.getAllProducts(orderby, types, pricerange)
    }

    render(){
        
        let products=[]
        products = this.props.products
        const products2 = products?.filter(product => product?.TypeId == 5 && product?.deleted == false);

        console.log("productos2:")
        console.log(products2)
        console.log(this.props)

        return(
            <div className="FridaCard-Container">
                <div>
                    <div className="FridaCard-Home">
                        {(products2?.length === 0) ? <Loading/>  : products2?.map((product) => { 
                            return <div key={product.id}> 
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    quantity={product.quantity} 
                                    description={product.descripton}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating}
                                    typeId= {product.TypeId}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: (orderby, types, pricerange) => dispatch(actions.getAllProducts(orderby, types, pricerange))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrindasyBaby);