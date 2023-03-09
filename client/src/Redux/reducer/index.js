import * as actions from "../actions/index";

const initialState = {
    products: [],
    productDetail:{},
    users: [],
    userDetail:{},
    reviews: [],
}

    


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.GET_ALL_PRODUCTS:
        return {
            ...state,
            products: action.payload,
            productDetail: {},
        }
        case actions.GET_PRODUCTS_DETAIL: return{
            ...state,
            productDetail: action.payload,
        }
        case actions.CREATE_PRODUCT: return {
            products: [...state.products, action.payload],
            productDetail: {},
        }

        case actions.DELETE_PRODUCT: 
            console.log(action.payload, 'DELETE REDUCE');
            return {
            ...state,
            // products: state.products,
            products: action.payload,
        }

        case actions.RESTORE_PRODUCT:
        return {
            ...state,
            products: state.products.map((product) =>
            product.id === action.payload ? { ...product, deleted: false } : product
            ),
            productDetail: {},
        }

        case actions.AGREGAR_CARRITO: 
        return {
            ...state,
            products: state?.products?.map(p => (p.id === action.payload.id)?action.payload: p),
        }

        
        case actions.SACAR_CARRITO: return {
            ...state,
            products:  state?.products?.map(p => (p.id === action.payload.id)?action.payload: p),
        }

        case actions.VACIAR_CARRITO: 
        return {
            ...state,
          products: state?.products?.map(p => p.carrito = "false")
        }

        case actions.GET_ALL_USERS:
        return {
            ...state,
            users: action.payload,
            userDetail: {},
        }

        case actions.GET_USER_DETAILS: return{
            ...state,
            users: [],
            userDetail: action.payload,
        }
        
        case actions.CREATE_USER: return {
            ...state,
            users: [...state.users, action.payload],
            userDetail:{}
        }

        case actions.DELETE_USER: return {
            users: state.users,
            userDetail: {},
        }

        case actions.SET_ADMIN_USERS: return {
            ...state,
            users: state.users.filter((item) => item.id !== action.payload),
            userDetail: {},
        }

        case actions.CREATE_REVIEW: return {
            reviews: [...state.reviews, action.payload],
        }
        case actions.GET_ALL_REVIEWS:
        return {
            ...state,
            reviews: action.payload,
        }

        default: return state;
    }
}

export default rootReducer;