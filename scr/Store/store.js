import {createStore, combineReducers , applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import { productReducer } from './Reducers'
import logger from 'redux-logger'
const RootReducers = combineReducers({
    productReducer
})

const store = createStore(
    RootReducers,
    applyMiddleware(thunk, logger)
);

export default store