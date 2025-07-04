import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  user?: any | undefined;
  role?: string;
  isLoggedIn?: boolean;
  accessToken?: string | null;
}
const initialState: IAuthState = {
  user: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});
export const { setToken } = authSlice.actions;
export default authSlice;
