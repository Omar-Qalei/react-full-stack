import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserService } from "../services/user/user-service";

const _userService = new UserService();

export const addUserAsync = createAsyncThunk("user/addUser", async (data) => {
  const response = await _userService.addUser(data);
  console.log(response);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const loginUserAsync = createAsyncThunk("user/loginUser", async (data) => {
    const response = await _userService.login(data);
    console.log(response);
    // The value we return becomes the `fulfilled` action payload
    return response;
});

export const removeUserAsync = createAsyncThunk("user/removeUser", async (user) => {
  console.log(user);
    const response = await _userService.removeUser(user.idToken);
    console.log(response);
    // The value we return becomes the `fulfilled` action payload
    return response;
});
  
const userSlice = createSlice({
  name: "User", // Could name it anything
  initialState: {
    user: null,
    status: "unauthorized",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.status = "authorized";
        console.log("addCase", action.payload);
        state.user = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "authorized";
        state.user = action.payload;
      })
      .addCase(removeUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeUserAsync.fulfilled, (state, action) => {
        state.status = "unauthorized";
        state.user = action.payload;
      });
  },
});

// export const { init } = userSlice.actions;

// export default userSlice.reducer;
export const userActions = userSlice.actions;

export default userSlice.reducer;
