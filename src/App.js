import React from 'react';
import { Route } from 'react-router-dom';
import Countries from './components/pages/Countries';
import CountriesList from './components/pages/CountriesList';
import MainHeader from './components/MainHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <main>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route exact path="/countrieslist">
            <CountriesList />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
