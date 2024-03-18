import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllProduct} from '@api/productApi';
const initialState = {
  productData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  limit: null,
};

export const getAllProducts = createAsyncThunk(
  'getAllProduct',
  async thunkApi => {
    console.log('getAllProducts');
    try {
      const response = await getAllProduct();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productData = action.payload.products;
      state.limit = action.payload.limit;
    });

    builder.addCase(getAllProducts.rejected, state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
