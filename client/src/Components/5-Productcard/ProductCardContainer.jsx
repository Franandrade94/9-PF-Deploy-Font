import "./productcardcontainer.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";
import ProductCard from "./ProductCard/ProductCard";
import Loading from "../6-Loading/Loading";

class ProductCardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products2: []
    };
  }

  componentDidMount() {
    const search = this.props.location.search;
    let orderby = new URLSearchParams(search).get('orderby');
    let types = new URLSearchParams(search).get('types');
    let pricerange = new URLSearchParams(search).get('pricerange');
    this.props.getAllProducts(orderby, types, pricerange);
  }

  componentWillUpdate(){
    console.log("aaaaa")
  }
  componentWillReceiveProps(){
    console.log("dsd")
  }
  handleAgregarCarrito = (id) => {
    this.props.agregarCarrito(id);
  };
  handleSacarCarrito = (id) => {
    this.props.sacarDelCarrito(id);
  };
  render() {

    let products=[]
        products = this.props.products
        const products2 = products?.filter(product => product?.deleted === false);

    return (
      <div className="ProductCard-Container">
        <div>
          <div className="ProductCard-Home">
            { products2?.length === 0 ? (
              <Loading />
            ) : (
              products2?.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      quantity={product.quantity}
                      description={product.descripton}
                      image={product.image}
                      price={product.price}
                      rating={product.rating}
                      typeId={product.TypeId}
                      carrito={product.carrito}
                      handleAgregarCarrito={this.handleAgregarCarrito}
                      handleSacarCarrito={this.handleSacarCarrito}

                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products,
    carrito: state.carrito
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: (orderby, types, pricerange) =>
      dispatch(actions.getAllProducts(orderby, types, pricerange)),
    agregarCarrito: (id) => dispatch(actions.agregarCarrito(id)),
    sacarDelCarrito: (id) => dispatch(actions.sacarDelCarrito(id))

    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);
