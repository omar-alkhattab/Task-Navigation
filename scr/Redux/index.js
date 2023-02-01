import { configureStore } from '@reduxjs/toolkit'
import Products from './Reducers/Product/ProductReducer'

// Redux ToolKit


export default store = configureStore({
    reducer: {
        Products,
    }
  })