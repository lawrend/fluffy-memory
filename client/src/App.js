import React, { Component } from 'react';
import Routes from './routes';

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

