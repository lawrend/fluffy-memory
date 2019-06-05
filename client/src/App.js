import React, { Component } from 'react';
import Routes from './routes';
import TopMenu from './containers/menus/TopMenu.js';
import LeftSideMenu from './containers/menus/LeftSideMenu.js';

class App extends Component {
  componentDidMount() {
    console.log("app component mounted")
  }

  render() {
    return (
      <div className="App" >
        <Routes />
      </div>
        )
  }
}

export default App;

