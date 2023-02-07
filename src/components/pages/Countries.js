import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Countries.css';

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);

  const alpha3Code = useParams().alpha3Code || '';

  const selectedCountry = countries.find(
    (country) => country.alpha3Code === alpha3Code,
  );

  if (!selectedCountry) {
    return <p>Country not found</p>;
  }

  return (
    <div className="selected-country-container">
      <img
        src={selectedCountry.flag}
        alt={selectedCountry.name}
        className="selected-country-flag"
      />
      <h2>{selectedCountry.name}</h2>
      <p>
        <strong>Capital:</strong>
        {selectedCountry.capital}
      </p>
      <p>
        <strong>Population:</strong>
        {selectedCountry.population.toLocaleString()}
      </p>
      <p>
        <strong>Area:</strong>
        {selectedCountry.area.toLocaleString()}
        {' '}
        km
        <sup>2</sup>
      </p>
      <p>
        <strong>Languages:</strong>
        {selectedCountry.languages.map((language) => language.name).join(', ')}
      </p>
      <p>
        <strong>Currencies:</strong>
        {selectedCountry.currencies.map((currency) => currency.name).join(', ')}
      </p>
      {selectedCountry && selectedCountry.borders ? (
        <p>
          <strong>Border Countries:</strong>
          {selectedCountry.borders.length > 0 ? (
            selectedCountry.borders.join(', ')
          ) : (
            <em>None</em>
          )}
        </p>
      ) : null}
    </div>
  );
};

export default Countries;
