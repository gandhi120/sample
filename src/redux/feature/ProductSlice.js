import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllProduct} from '@api/productApi';
const initialState = {
  productData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  limit: 10,
  skip: 0,
  refresh: false,
};

export const getAllProducts = createAsyncThunk(
  'getAllProduct',
  async (data, thunkApi) => {
    const {limit, skip} = data;
    try {
      const response = await getAllProduct(limit, skip);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    onPageRefresh: state => {
      state.skip = 0;
      state.isLoading = true;
      state.refresh = true;
      state.productData = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = !state.skip > 0;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productData = [...state.productData, ...action.payload.products];
      state.skip = state.productData.length;
      state.refresh = false;
    });

    builder.addCase(getAllProducts.rejected, state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});
export const {onPageRefresh} = ProductSlice.actions;

export default ProductSlice.reducer;
