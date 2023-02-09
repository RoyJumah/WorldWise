import reducer, { fetchCountries } from '../redux/countries/CountriesSlice';

describe('Countries reducer tests', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      loading: false,
      error: null,
      countries: [],
    });
  });

  test('should handle fetch countries pending state', () => {
    const previousState = {
      loading: false,
      error: null,
      countries: [],
    };
    const action = { type: fetchCountries.pending.toString() };
    expect(reducer(previousState, action)).toEqual({
      loading: true,
      error: null,
      countries: [],
    });
  });

  test('should handle fetch countries fulfilled state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: fetchCountries.fulfilled.toString(),
      payload: [{ name: 'Thailand' }, { name: 'Singapore' }],
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: null,
      countries: [{ name: 'Thailand' }, { name: 'Singapore' }],
    });
  });

  test('should handle fetch countries rejected state', () => {
    const previousState = {
      loading: true,
      error: null,
      countries: [],
    };
    const action = {
      type: fetchCountries.rejected.toString(),
      error: 'Something went wrong',
    };
    expect(reducer(previousState, action)).toEqual({
      loading: false,
      error: 'Something went wrong',
      countries: [],
    });
  });
});
