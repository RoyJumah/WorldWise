import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/CountriesSlice';
import './CountriesList.css';

function CountriesList() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {countries.slice(0, 10).map((country) => (
        <div style={{ width: '50%', padding: '10px' }} key={country.alpha3Code}>
          <Link to={`/countries/${country.alpha3Code}`}>
            <img
              src={country.flag}
              alt={country.name}
              style={{ width: '20%', height: 'auto', marginRight: '10px' }}
            />
            {country.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
