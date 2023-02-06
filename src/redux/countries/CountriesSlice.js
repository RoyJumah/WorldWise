import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://restcountries.com/v2/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.slice(0, 12);
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    loading: false,
    error: null,
    countries: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => ({ ...state, loading: true }),
    [fetchCountries.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      countries: action.payload,
    }),
    [fetchCountries.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }),
  },
});

export default countriesSlice.reducer;
