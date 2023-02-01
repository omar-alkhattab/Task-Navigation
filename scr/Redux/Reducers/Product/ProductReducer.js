import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    'Products/getProducts',
    async (_, thunkAPI) => {
        const { rejectedWithValue } = thunkAPI;
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json()
            return data
        } catch (err) {
            return rejectedWithValue(err.message)
        }
    })


const ProductSlice = createSlice({
    name: 'Products',
    initialState: { products: {}, loading: false, isSuccess: false },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false,
                state.products = action.payload,
                state.isSuccess = true,
                console.log('fulfilled ', action)
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = true,
            state.isSuccess = false
        })
    }
});

export default ProductSlice.reducer