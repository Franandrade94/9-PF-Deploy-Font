import "./productoscarrito.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/index";
import CarritoProductCard from "../CarritoProductCard/CarritoProductCard";
import { Link } from "react-router-dom";


class ProductosCarrito extends Component {


    componentDidMount() {
        const search = this.props.location.search;
        let orderby = new URLSearchParams(search).get('orderby');
        let types = new URLSearchParams(search).get('types');
        let pricerange = new URLSearchParams(search).get('pricerange');
        this.props.getAllProducts(orderby, types, pricerange)
    }

    handleCarrito = (id) => {
        this.props.agregarCarrito(id);
    }

    render(){
        
        let products=[]
        products = this.props.products 
        const products2 = products?.filter(product => product?.carrito === true);
  
        let totalPrice = 0;
        products2.forEach((product) => {
            totalPrice += product.price;
          });

        console.log(this.props)

        return(
            <div className="CarritoProductCard-Container">
                <div>
                    <div className="CarritoProductCard-Home">
                        <button className='Vaciar-Carrito'>Vaciar carrito</button>
                        {(products2?.length === 0) ? <h3 className="carritovacio">carrito vacio</h3>: 
                        products2?.map((product) => {
                            return <div key={product.id}>
            
                                <CarritoProductCard
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    handleCarrito={this.handleCarrito}
                                />
                                
                            </div>
                        })}
                        {(products2?.length !== 0) ? (<Link to='/pagos'><button>Ir a pagar</button></Link>) : <p/>}
                        <h2 className="totalcarrito">Total: ${totalPrice}</h2>
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
        getAllProducts: (orderby, types, pricerange) => dispatch(actions.getAllProducts(orderby, types, pricerange)),  
        agregarCarrito: (id) => {
            dispatch(actions.agregarCarrito(id))},
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosCarrito);
