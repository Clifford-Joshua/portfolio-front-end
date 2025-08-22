import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDay: localStorage.getItem("theme") === "day",
  isSideBar: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    themeValue: (state, action) => {
      state.isDay = action.payload ? true : false;
    },
    openSideBar: (state) => {
      state.isSideBar = true;
    },
    closeSideBar: (state) => {
      state.isSideBar = false;
    },
  },
});

export const { themeValue, openSideBar, closeSideBar } = navSlice.actions;
export default navSlice.reducer;
