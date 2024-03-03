import { createSlice } from "@reduxjs/toolkit";

export type userType = {
  name: string;
  password: string;
  isAuthenticated: boolean;
};

export type userSliceType = {
  state: {
    isFetching: boolean;
  };
  users: userType[];
};

const initialState: userSliceType = {
  state: {
    isFetching: false,
  },
  users: [
    {
      name: "shivan@gmail.com",
      password: "parvathi@28",
      isAuthenticated: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
    checkUser: (state, payload) => {
      console.log(payload);
    },
  },
});

export const { setIsFetching, checkUser } = userSlice.actions;

export default userSlice.reducer;
