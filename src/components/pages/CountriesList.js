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
    <div className="countries-list-container">
      {countries.slice(0, 12).map((country) => (
        <div className="country-item" key={country.alpha3Code}>
          <Link to={`/countries/${country.alpha3Code}`}>
            <img
              src={country.flag}
              alt={country.name}
              className="country-flag"
            />
            {country.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
