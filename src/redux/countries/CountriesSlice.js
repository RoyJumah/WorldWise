import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://restcountries.com/v2/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomIndices = [];
    while (randomIndices.length < 12) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices.map((index) => data[index]);
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
