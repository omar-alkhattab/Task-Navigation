import { GET_PRODUCTS } from "../Constant";

const APP_URL = 'https://fakestoreapi.com/products'

export const getProduct = () => {

    return async dispatch => {
        try {
            const res = await fetch(APP_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await res.json()

            if (json) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json
                })
            } else {
                console.log('Error fetch API getProduct ');
            }
        }
        catch (error) {
            console.log('getProduct Action error ', error);
        }
    }
}
