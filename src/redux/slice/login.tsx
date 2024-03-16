import { createSlice } from "@reduxjs/toolkit";

export type userType = {
  mail: string,
  name: string;
  password: string;
  isAuthenticated: boolean;
  role: string;
  profile: string
};

export type userSliceType = {
  state: {
    isFetching: boolean;
  };
  users: userType[];
  loggedInUser: userType;
};

const initialState: userSliceType = {
  state: {
    isFetching: false,
  },
  users: [
    {
      name: "Shivan",
      mail: "shivan@gmail.com",
      password: "parvathi@28",
      profile: "https://images.unsplash.com/photo-1709403338549-10e6b0e24c3f?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isAuthenticated: false,
      role: "admin"
    },
    {
      name: "Parvathi",
      mail: "parvathi@gmail.com",
      password: "shivan@28",
      isAuthenticated: false,
      role: "user",
      profile: "https://plus.unsplash.com/premium_photo-1688541098711-fc692bcf5763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpdmF8ZW58MHx8MHx8fDA%3D"
    }
  ],
  loggedInUser: {} as userType
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
    setuser: (state, { payload }) => {
      let userLog: userType = {} as userType;
      state.users.forEach(user => {
        if (user.mail === payload) {
          user.isAuthenticated = true;
          userLog = user;
        }
      })
      state.loggedInUser = userLog;
    },
    logoutuser: (state) => {
      state.loggedInUser = {
        name: "",
        mail: "",
        password: "",
        isAuthenticated: false,
        role: "",
        profile: ""
      };
    }
  },
});

export const { setIsFetching, checkUser, setuser, logoutuser } = userSlice.actions;

export default userSlice.reducer;
