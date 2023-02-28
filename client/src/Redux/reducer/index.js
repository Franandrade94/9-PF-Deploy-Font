import * as actions from "../actions/index";

const initialState = {
    products: [],
    productDetail:{},
    users: [],
    userDetail:{}
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
            products: [],
            productDetail: action.payload,
        }
        case actions.CREATE_PRODUCT: return {
            products: [...state.products, action.payload],
            productDetail: {},
        }

        case actions.DELETE_PRODUCT: return {
            products: state.products,
            productDetail: {},
        }

        case actions.RESTORE_PRODUCT:
        return {
            ...state,
            products: state.products.map((product) =>
            product.id === action.payload ? { ...product, deleted: false } : product
            ),
            productDetail: {},
        }

        case actions.AGREGAR_CARRITO: return {
            products: state.products,
            productDetail: {},
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
            users: [...state.users, action.payload],
            userDetail:{}
        }

        case actions.DELETE_USER: return {
            users: state.users.filter((item) => item.id !== action.payload),
            userDetail: {},
        }

        default: return state;
    }
}

export default rootReducer;