import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./CountriesSlice";
const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
