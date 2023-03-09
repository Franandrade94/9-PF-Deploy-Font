import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const RESTORE_PRODUCT = "RESTORE_PRODUCT";
export const AGREGAR_CARRITO = "AGREGAR_CARRITO";
export const SACAR_CARRITO = "SACAR_CARRITO";
export const VACIAR_CARRITO = "VACIAR_CARRITO";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const CREATE_USER ="CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_ADMIN_USERS = "SET_ADMIN_USERS";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";



export const getAllProducts = (orderby=null, types = null, pricerange=null) => {
    const _orderby = (orderby)?`orderby=${orderby}`:{}
    const _types = (types)?`types=${types}`:{}
    const _pricerange = (pricerange)?`pricerange=${pricerange}`:{}
    return (dispatch) => {
        return axios.get(`/products?${_orderby}&${_types}&${_pricerange}`)
        .then(res => dispatch({
            type:GET_ALL_PRODUCTS, 
            payload: res.data
        }))
    }
};

export const getProductDetail = (id) => {
    return (dispatch) => {
        return axios.get(`/products/${id}`)
            .then(res => dispatch({ 
                type: GET_PRODUCTS_DETAIL, 
                payload: res.data }))
    }
};

export const createProduct = (product) => {
    return (dispatch) => {
        return axios.post(`/products`, product)
            // .then(e => console.log(e.data, 'CREATE'))
            .then(res => dispatch({ 
                type: CREATE_PRODUCT, 
                payload: res.data }))
    }
};

export const deleteProduct = (id) => {
    // console.log(id, 'ID ACTION');
    return (dispatch) => {
        return axios.delete(`/products/${id}`)
            // .then(res => console.log(res.data, 'DATA DELETE'))
            .then(res => dispatch({ 
                type: DELETE_PRODUCT, 
                payload: res.data }))
    }
};

export const restoreProduct = (id) => {
    return {
      type: RESTORE_PRODUCT,
      payload: id
    }
  }

export const agregarCarrito = (id) => {
    return (dispatch) => {
        return axios.get(`/products/carrito/${id}`)
            .then(res => dispatch({
                type: AGREGAR_CARRITO,
                payload: res.data
            })
        )
    }
}

export const sacarDelCarrito = (id) => {
    return (dispatch) => {
        return axios.delete(`/products/carrito/${id}`)
            .then(res => dispatch({
                type: SACAR_CARRITO,
                payload: res.data
            })
        )
    }
};

export const vaciarCarrito = (carrito) => {
    return (dispatch) => {
        return axios.post(`/products/carrito`, {carrito})
            .then(res => dispatch({
                type: VACIAR_CARRITO,
                payload: res.data
            })
        )
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        return axios.get(`/users`)
            .then(res => dispatch({ 
                type: GET_ALL_USERS, 
                payload: res.data }))
    }
};

export const getUserDetail = (id) => {
    return (dispatch) => {
        return axios.get(`/users/${id}`)
            .then(res => dispatch({ 
                type: GET_USER_DETAILS, 
                payload: res.data }))
    }

};

// https://pfhenry-back-production.up.railway.app/users

export const createUser = (user) => {
    return (dispatch) => {
        return axios.post(`/users`, user)
            // .then(e => {
            //     if(e.data.email){
            //         localStorage.setItem('user', JSON.stringify(e.data));
            //     }
            // })
            .then(res => {
                console.log(res.data, 'DATAAAAA');
                if(res.data.email){
                    localStorage.setItem('user', JSON.stringify(res.data));
                }
                // console.log(JSON.parse(localStorage.getItem('user')), 'LOCAALLL');
                dispatch(
                // console.log(res.data, 'DATA RES'),
                { 
                type: CREATE_USER, 
                payload: res.data })})
    }

};

export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload,
    }
};

export const setAdminUsers = (id) => {
    return (dispatch) => {
        return axios.delete(`/users/admin/${id}`)
            .then(e => {
                console.log(e.data, 'SETADMIN')
                localStorage.setItem('user', JSON.stringify(e.data));
            })
            .then(res => dispatch({
                type: SET_ADMIN_USERS,
                payload: res.data
            }))
    }
};

export const createReview = (review) => {
    return (dispatch) => {
        return axios.post(`/reviews`, review)

            .then(res => dispatch({
                type: CREATE_REVIEW,
                payload: res.data
            }
            ))
    }
}

export const getAllReviews = () => {
    return (dispatch) => {
        return axios.get(`/reviews`)
            .then(res => dispatch({ 
                type: GET_ALL_REVIEWS, 
                payload: res.data }))
    }
};
