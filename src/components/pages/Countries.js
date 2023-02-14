import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    <TransitionGroup className="selected-country-container">
      <CSSTransition
        key={selectedCountry.alpha3Code}
        timeout={300}
        classNames="fade-enter fade-enter-active fade-exit fade-exit-active"
      >
        <div>
          <div className="selected-country-info">
            <div className="title__name">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="selected-country-flag"
              />
              <h2>{selectedCountry.name}</h2>
            </div>
          </div>
          <div className="selected-country-details">
            <h3 className="country-details">Stats Breakdown</h3>
          </div>
          <ul className="selected-country-details-content">
            <li>
              <strong>Capital:</strong>
              {' '}
              {selectedCountry.capital}
            </li>
            <li>
              <strong>Timezones:</strong>
              {' '}
              {selectedCountry.timezones}
            </li>
            <li>
              <strong>Population:</strong>
              {' '}
              {selectedCountry.population.toLocaleString()}
            </li>
            <li>
              <strong>Area:</strong>
              {' '}
              {selectedCountry.area.toLocaleString()}
              {' '}
              km
              <sup>2</sup>
            </li>
            <li>
              <strong>Languages:</strong>
              {' '}
              {selectedCountry.languages
                .map((language) => language.name)
                .join(', ')}
            </li>
            <li>
              <strong>Currencies:</strong>
              {' '}
              {selectedCountry.currencies
                .map((currency) => currency.name)
                .join(', ')}
            </li>
            {selectedCountry && selectedCountry.borders ? (
              <li>
                <strong>Border Countries:</strong>
                {selectedCountry.borders.length > 0 ? (
                  selectedCountry.borders.join(', ')
                ) : (
                  <em>None</em>
                )}
              </li>
            ) : null}
            {/* <Link to="/" className="return-to-list-link">
              <RiArrowLeftLine size={25} />
              Return to Homepage
            </Link> */}
          </ul>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Countries;
