import "./productdetailcard.css"
import React, { Component } from "react";
import * as actions from "../../Redux/actions/index";
import { connect } from 'react-redux';
import Logo2 from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav2";
import star from "../../Images/Staricon.png";
import Loading from "../../Components/6-Loading/Loading";



class ProductDetailCard extends Component {

    componentDidMount() {
        const id = this.props?.match?.params.id
        console.log(id)
        this.props.getProductDetail(id)

    }

    handleCarrito = (id) => {
        this.props.agregarCarrito(id);
    }

    render() {
        
        let product = this.props.productDetail;

        console.log(product)
        return (
            <div className="Detail-Component">

                <Logo2/>
                <Nav/>
            
            {(product.image === undefined) ? <Loading/> :
                
                <div className="AllDetailCard">
                
                    <div className="DetailCardContainer">
                        <div className="container">
                            <div className="imgContainer">
                                <img src={product.image} alt=""/>
                            </div>
                        </div>

                        <div className="TextContainer">
                            
                            <p className="macetacardName">{product.name}</p>
                            <p className="macetacardPrice">${product.price}</p>
                            <p className="descriptionMacetacard">{product.description}</p>
                            <p><img className="starIcon" src={ star } alt=""/>{product.rating}</p>
                            <p>Stock: {product.quantity}</p>
                            <button className='macetacardCarrito' onClick={ this.handleCarrito } >agregar al carrito</button>

                        </div>   
                    </div>        
                </div>
            }
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        productDetail: state.productDetail
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: (id) => dispatch(actions.getProductDetail(id)),
        agregarCarrito: (id) => 
            dispatch(actions.agregarCarrito(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailCard);