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

  /*
  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      let products = this.props.products;
      const products2 = products?.filter(product => product?.deleted === false);
      console.log(products);
      console.log(this.props);
      this.setState({ products2: products2 }); // Actualizar el estado products2
    }
    // Verificar si hubo algún cambio en this.props.carrito
    if (prevProps.carrito !== this.props.carrito) {
      // Actualizar el estado local products2 con la propiedad carrito actualizada
      const products2 = this.props.products?.filter(product => product?.deleted === false).map(product => {
        const carrito = this.props.carrito.includes(product.id);
        return { ...product, carrito };
      });
      this.setState({ products2 });
    }
  }
  */

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

    return (
      <div className="ProductCard-Container">
        <div>
          <div className="ProductCard-Home">
            {this.props.products?.length === 0 ? (
              <Loading />
            ) : (
              this.props.products?.map((product) => {
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
