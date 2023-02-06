import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/CountriesSlice';

function CountriesList() {
  const dispatch = useDispatch();
  const { loading, error, countries } = useSelector((state) => state.countries);

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.alpha2Code}>{country.name}</li>
      ))}
    </ul>
  );
}

export default CountriesList;
