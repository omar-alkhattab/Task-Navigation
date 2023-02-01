const APP_URL = 'https://fakestoreapi.com/products'

const fetchAPI = async (url, params) => {
    try {
        let result = await fetch(url, {
            method: 'GET',
        })
        return result.json()
    } catch (error) {
        console.log('error fetchAPI testAction ',error);
    }
}

export const getProductCallBack = (callBack) => {
    return async (dispatch) => {
        let res = await fetchAPI(APP_URL)
        // console.log("test", res)
        if (callBack) {
            callBack(res)
        }
    }
}
