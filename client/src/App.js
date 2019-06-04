import React, { Component } from 'react';
import Routes from './routes';
import TopMenu from './containers/menus/TopMenu.js';
import LeftSideMenu from './containers/menus/LeftSideMenu.js';
import Home from './components/Home.js';

class App extends Component {
  componentDidMount() {
    console.log("app component mounted")
  }

  render() {
    return (

      <div className={"App"} >
          <TopMenu />
          <LeftSideMenu />
          <Routes />
      </div>
        )
}

}

export default App;

