import { GET_PRODUCTS } from "../Constant";

const initialState = {
    loading : true,
    isSuccess : false,
    products : []
}

export function productReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS: {
            return {...state , products : action.payload , loading : false , isSuccess : true}
        }
        default :
            return state
    }
}