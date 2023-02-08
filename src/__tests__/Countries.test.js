import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import Countries from '../components/pages/Countries';

import filterCountries from '../tertiary_test_files/countries-list';

describe('Display Countries component', () => {
  test('it matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Route path="/countries/:alpha3Code?">
              <Countries />
            </Route>
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should return  Countries Component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Route path="/countries/:alpha3Code?">
            <Countries />
          </Route>
        </Router>
      </Provider>,
    );
  });
});

describe('filterCountries', () => {
  test('it filters the countries based on search term', () => {
    const countries = [
      { name: 'United States of America' },
      { name: 'United Kingdom' },
      { name: 'France' },
    ];
    const searchTerm = 'United';
    const filteredCountries = filterCountries(countries, searchTerm);
    expect(filteredCountries).toEqual([
      { name: 'United States of America' },
      { name: 'United Kingdom' },
    ]);
  });
});
