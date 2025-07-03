import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});
export const { setToken } = authSlice.actions;
export default authSlice;
