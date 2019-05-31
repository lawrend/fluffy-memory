// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './components/Home.js'
import ErrorRoute from './components/ErrorRoute';
import SpeciesForm from './containers/SpeciesForm.js';
import LocationForm from './containers/LocationForm.js';
import LocationDetail from './components/LocationDetail.js';
import SpeciesDetail from './components/SpeciesDetail.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/species-form" component={SpeciesForm} />
          <Route exact path="/location-form" component={LocationForm} />
          <Route path="/location-detail/:id" component={LocationDetail} />
          <Route path="/species-detail/:id" component={SpeciesDetail} />
          <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);

// <Route exact path="/songsearch" component={SongSearchBar} />
//         <Route exact path="/songoftheday" component={SongOfTheDayContainer} />
//         <Route path="/songspecifics/:id" component={SongSpecifics} />


