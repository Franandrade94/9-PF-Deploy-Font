import "./productoscarrito.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/index";
import CarritoProductCard from "../CarritoProductCard/CarritoProductCard";
import { Link } from "react-router-dom";


class ProductosCarrito extends Component {

    constructor(props) {
        super(props);
        this.state = {
          products2: [],
          totalPrice: 0
        };
    }

    componentDidMount() {
        const search = this.props.location.search;
        let orderby = new URLSearchParams(search).get('orderby');
        let types = new URLSearchParams(search).get('types');
        let pricerange = new URLSearchParams(search).get('pricerange');
        this.props.getAllProducts(orderby, types, pricerange)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products !== this.props.products) {
          // Si hay cambios en los productos, actualiza el estado
          const products = this.props.products;
          console.log(products, "ANTES")
          const products2 = products?.filter((product) => product?.carrito === true);
          console.log(products2, "DESPUES")
          let totalPrice = 0;
          products2?.forEach((product) => {
            totalPrice += product.price;
          });
          this.setState({ products2, totalPrice });
        }
      }

    handleCarrito = (id) => {
        this.props.agregarCarrito(id);
    }

    render(){
        
        const { products2, totalPrice } = this.state;
  
        console.log(products2, "carritoCompras")

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
                                    carrito= {product.carrito}
                                    handleCarrito={this.handleCarrito}
                                />
                                
                            </div>
                        })}
                        {(products2?.length !== 0) ? (<Link to={`/pagos/${totalPrice}`} ><button className="iRaPagar">Ir a pagar</button></Link>) : <p/>}
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

