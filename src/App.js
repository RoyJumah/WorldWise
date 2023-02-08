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
            <CountriesList />
          </Route>
          <Route path="/countries/:alpha3Code" component={Countries} />
        </main>
      </div>
    );
  }
}

export default App;
