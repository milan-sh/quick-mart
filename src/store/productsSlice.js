import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}?limit=90`);
    return response.data.products;
  } catch (error) {
    return error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = axios.get(`${API_URL}/${productId}`);
    return await (response.data)
  } catch (error) {
    return error;
  }
};
const initialState = {
  products: [],
  selectedProduct: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer
