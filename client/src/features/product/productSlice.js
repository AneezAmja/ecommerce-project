import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";


const initialState = {
  products: [],
  product: {},
  isError: null,
  isSuccess: null,
  isLoading: null,
  message: "",
};

// Get all products
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
        console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get an individual product
export const getIndividualProduct = createAsyncThunk(
  "product/getIndividualProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getIndividualProduct(id);
    } catch (error) {
        console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// purchase product
export const purchaseProduct = createAsyncThunk(
  "product/purchaseProduct",
  async (productInfo, thunkAPI) => {
    try {
      return await productService.purchaseProduct(productInfo);
    } catch (error) {
        console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = null;
      })
      .addCase(getIndividualProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIndividualProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getIndividualProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      })
      .addCase(purchaseProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(purchaseProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(purchaseProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      })
      
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;