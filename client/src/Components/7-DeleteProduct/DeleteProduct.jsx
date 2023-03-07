import "./deleteproduct.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions/index";
import ProductCard from "../5-Productcard/ProductCard/ProductCard";
import Loading from "../6-Loading/Loading";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // console.log(products, 'PRODUCT DELETE');
  
  const search = window.location.search;
  const orderby = new URLSearchParams(search).get("orderby");
  const types = new URLSearchParams(search).get("types");
  const pricerange = new URLSearchParams(search).get("pricerange");

  useEffect(() => {
    dispatch(actions.getAllProducts(orderby, types, pricerange));
  }, [dispatch]);

  const filteredProducts = products?.filter((product) => !product?.eliminado);

  const handleDelete = (id) => {
    dispatch(actions.deleteProduct(id));
    // dispatch(actions.getAllProducts(orderby, types, pricerange));
    // console.log(id, 'ID');
  };


  return (
    <div className="ProductCard-Container">
      <div>
        <div className="ProductCard-Home">
          {filteredProducts?.length === 0 ? (
            <Loading />
          ) : (
            filteredProducts?.map((product) => (
              <div key={product.id}>
                {product?.deleted === false ? (
                  <button
                    className="eliminarbutt"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className="restaurarbutt"
                    onClick={() => handleDelete(product.id)}
                  >
                    Restaurar
                  </button>
                )}

                <ProductCard
                  id={product.id}
                  name={product.name}
                  quantity={product.quantity}
                  description={product.descripton}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  typeId={product.TypeId}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;




// import "./deleteproduct.css";
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../../Redux/actions/index";
// import ProductCard from "../5-Productcard/ProductCard/ProductCard";
// import Loading from "../6-Loading/Loading";

// class DeleteProduct extends Component {

//     componentDidMount() {
//         const search = this.props.location.search;
//         let orderby = new URLSearchParams(search).get('orderby');
//         let types = new URLSearchParams(search).get('types');
//         let pricerange = new URLSearchParams(search).get('pricerange');
//         this.props.getAllProducts(orderby, types, pricerange)
//     }

//     handleDelete = (id) => {
//         this.props.deleteProduct(id);
//     }
    

//     render(){
//         console.log(this.products, 'PRODCUT EN DELETE');

//         const products = this.props.products?.filter(product => !product?.eliminado);
        
//         return(
//             <div className="ProductCard-Container">
//                 <div>
//                     <div className="ProductCard-Home">
//                         {(products?.length === 0) ? <Loading/>  : products?.map((product) => {
//                             return <div key={product.id}>
                                
//                                 {(product?.deleted === false) ? <button className="eliminarbutt" onClick={() => this.handleDelete(product.id)}>Eliminar</button> : <button className="restaurarbutt" onClick={() => this.handleDelete(product.id)}>Restaurar</button>}
                                
//                                 <ProductCard
//                                     id={product.id}
//                                     name={product.name}
//                                     quantity={product.quantity} 
//                                     description={product.descripton}
//                                     image={product.image}
//                                     price={product.price}
//                                     rating={product.rating}
//                                     typeId={product.TypeId}
//                                 />
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// };

// export const mapStateToProps = (state) => {
//     return {
//         products: state.products
//     }
// };

// export const mapDispatchToProps = (dispatch) => {
//     return {
//         getAllProducts: (orderby, types, pricerange) => dispatch(actions.getAllProducts(orderby, types, pricerange)),
//         deleteProduct: (id) => {
//             dispatch(actions.deleteProduct(id))},
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
