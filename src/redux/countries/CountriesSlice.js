import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = "https://restcountries.com/v2/all";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    error: null,
    countries: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default countriesSlice.reducer;
