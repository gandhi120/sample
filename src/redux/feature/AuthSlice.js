import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginUser} from '@authApi/authApi';
const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  authToken: '',
};
export const login = createAsyncThunk('login', async (params, thunkApi) => {
  try {
    const response = await loginUser(params);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
      state.authToken = action.payload.token;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default AuthSlice.reducer;
