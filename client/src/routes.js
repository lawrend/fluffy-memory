// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './components/Home.js'
import ErrorRoute from './components/ErrorRoute';
import CountryData from './containers/CountryData.js';
import SpeciesData from './containers/SpeciesData.js';
// import SongSearchBar from './containers/SongSearchBar.js';
// import SongSpecifics from './components/SongSpecifics.js';
// import SongOfTheDayContainer from './containers/SongOfTheDayContainer.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country-data" component={CountryData} />
        <Route exact path="/species-data" component={SpeciesData} />
        <Route component={ErrorRoute} />
      </Switch>
      )
}
};

export default withRouter(Routes);

// <Route exact path="/songsearch" component={SongSearchBar} />
//         <Route exact path="/songoftheday" component={SongOfTheDayContainer} />
//         <Route path="/songspecifics/:id" component={SongSpecifics} />


