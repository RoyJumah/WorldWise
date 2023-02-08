import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

import CountriesList from '../components/pages/CountriesList';

describe('Display CountriesList component', () => {
  test('it matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CountriesList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should return CountriesList Component', () => {
    render(
      <Provider store={store}>
        <CountriesList />
      </Provider>,
    );
  });
});
