import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}?limit=90`)
    const data = response.data.products
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    const data = response.data
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})


const initialState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder
    .addCase(fetchProducts.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.products = action.payload
      state.loading = false
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.loading = false
      state.error = action.payload
    })

    // Handle fetchProductById lifecycle
    builder
    .addCase(fetchProductById.pending, (state)=>{
      state.loading = true
    })
    .addCase(fetchProductById.fulfilled, (state, action)=>{
      state.selectedProduct = action.payload
      state.loading = false
    })
    .addCase(fetchProductById.rejected, (state)=>{
      state.error = true
      state.loading = false
    })
  }
});

export default productsSlice.reducer
