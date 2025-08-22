import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideContent: false,
  isDashboard: true,
  isMessage: false,
  isSettings: false,
  isModal: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    openSideContent: (state) => {
      state.isSideContent = true;
    },
    closeSideContent: (state) => {
      state.isSideContent = false;
    },
    openDashboard: (state) => {
      state.isDashboard = true;
      state.isMessage = false;
      state.isSettings = false;
    },
    openMessage: (state) => {
      state.isDashboard = false;
      state.isMessage = true;
      state.isSettings = false;
    },
    openSettings: (state) => {
      state.isDashboard = false;
      state.isMessage = false;
      state.isSettings = true;
    },
    toggleModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const {
  openDashboard,
  openMessage,
  openSettings,
  openSideContent,
  closeSideContent,
  toggleModal,
} = contentSlice.actions;
export default contentSlice.reducer;
