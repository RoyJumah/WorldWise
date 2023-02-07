import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/CountriesSlice';
import './CountriesList.css';
import LoadingSpinner from '../LoadingSpinner';

function CountriesList() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  React.useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [countries, searchTerm]);

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="countries-list-container">
        {filteredCountries.map((country) => (
          <div className="country-item" key={country.alpha3Code}>
            <Link to={`/countries/${country.alpha3Code}`}>
              <img
                src={country.flag}
                alt={country.name}
                className="country-flag"
              />
              <div className="country-info">
                <h3 className="country-name">{country.name}</h3>
                <p className="country-timezone">{country.timezones}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountriesList;
