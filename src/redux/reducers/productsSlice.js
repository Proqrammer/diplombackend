import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("api/products", async () => {
    const res = await axios.get("http://localhost:8000/products");
    return res.data;
})
export const getBasketThunk = createAsyncThunk("api/basket", async () => {
    const res = await axios.get("http://localhost:8000/basket");
    return res.data;
})
export const postProductsThunk = createAsyncThunk("api/postproducts", async (data) => {
    const res = await axios.post("http://localhost:8000/products", data);
    return res.data;
})
export const postBasketThunk = createAsyncThunk("api/postbasket", async (data) => {
    const res = await axios.post("http://localhost:8000/basket", data);
    return res.data;
})

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        baskets: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getBasketThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.baskets = action.payload;
            })
            .addCase(getBasketThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(postProductsThunk.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(postBasketThunk.fulfilled, (state, action) => {
                state.baskets.push(action.payload);
            });
    }
});

export default productsSlice.reducer;
