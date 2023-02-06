import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);
  const { id } = useParams();
  const selectedCountry = countries.find(
    (country) => country.alpha3Code === id,
  );

  return (
    <div>
      {selectedCountry ? (
        <div>
          <h1>{selectedCountry.name}</h1>
          <p>
            Capital:
            {selectedCountry.capital}
          </p>
          <p>
            Population:
            {selectedCountry.population}
          </p>
        </div>
      ) : (
        <p>Country not found</p>
      )}
    </div>
  );
};

export default Countries;
