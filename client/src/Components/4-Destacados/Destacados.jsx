import "./destacados.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";
import DestacadosProdcutCard from "./DestacadosProductCard/DestacadosProductCard";
import Loading from "../6-Loading/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Destacados extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products3: []
    };
  }
  
  componentDidMount() {
    this.props.getAllProducts();
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
    let products = [];
    products = this.props.products;
    const products2 = this.products?.filter(p => p?.deleted === false);
    const products3 = products2?.filter((product) => product?.rating >= 4.5 && product?.quantity >= 1)
      .slice(0, 12);
    // console.log(this.props.products, 'PRODUCT');

    return (
      <div className="destacados">
        <h1>Destacados</h1>
        {products3?.length === 0 ? (
          <Loading />
        ) : (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            autoplay={true}
            autoplaySpeed={2000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]}
          >
            {products3?.map((product) => {
              return (
                <div key={product.id}>
                  <DestacadosProdcutCard
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
            })}
          </Slider>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Destacados);