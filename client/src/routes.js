// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './containers/Home.js'
import Blackness from './components/Blackness.js';
import ErrorRoute from './components/ErrorRoute';
import LocationDetail from './components/LocationDetail.js';
import LocationListingsContainer from './containers/LocationListingsContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Blackness} />
        <Route path="/home" component={Home} />
        <Route path="/location-detail/:name" component={LocationDetail} />
        <Route path="/species/locations/:name" component={LocationListingsContainer} />
        <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);


//<Route path="/species-form" component={SpeciesForm} />
