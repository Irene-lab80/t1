import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
  firstName: string | null;
  lastName: string | null;
  access_token?: string | null;
  id: number | null;
}

const access_token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState: IUser = {
  firstName: null,
  lastName: null,
  access_token,
  id: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      return { ...state, ...action.payload };
    },
    resetUser() {
      return initialState;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
