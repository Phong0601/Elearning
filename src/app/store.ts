import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "features/elearning/pages/Home/utils/homeSlice";
const store = configureStore({
    reducer:{
        homeReducer: homeSlice.reducer
    }
})
export default store