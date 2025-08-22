import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./utils/features/navSlice.js";
import contentReducer from "./utils/features/contentSlice.js";

export const Store = configureStore({
  reducer: {
    navBar: navReducer,
    content: contentReducer,
  },
});
