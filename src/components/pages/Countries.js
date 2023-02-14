import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
    >
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
      <motion.ul
        className="selected-country-details-content"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={listItemVariants}>
          <strong>Capital:</strong>
          {' '}
          {selectedCountry.capital}
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Timezones:</strong>
          {' '}
          {selectedCountry.timezones}
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Population:</strong>
          {' '}
          {selectedCountry.population.toLocaleString()}
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Area:</strong>
          {' '}
          {selectedCountry.area.toLocaleString()}
          {' '}
          km
          <sup>2</sup>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Languages:</strong>
          {' '}
          {selectedCountry.languages
            .map((language) => language.name)
            .join(', ')}
        </motion.li>
        <motion.li variants={listItemVariants}>
          <strong>Currencies:</strong>
          {' '}
          {selectedCountry.currencies
            .map((currency) => currency.name)
            .join(', ')}
        </motion.li>
        {selectedCountry && selectedCountry.borders ? (
          <motion.li variants={listItemVariants}>
            <strong>Border Countries:</strong>
            {selectedCountry.borders.length > 0 ? (
              selectedCountry.borders.join(', ')
            ) : (
              <em>None</em>
            )}
          </motion.li>
        ) : null}
      </motion.ul>
    </motion.div>
  );
};

export default Countries;
