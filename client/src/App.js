import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import { Menu, Container } from 'semantic-ui-react';

class App extends Component {
  // componentDidMount() {
  //   window.fetch('/api/countries')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.log(error));
  // }
  render() {
    return (
      <div className="App" >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item href="/" header>
              Home
            </Menu.Item>

            <Menu.Item href="/species-data" >
                Species Data
            </Menu.Item>
            <Menu.Item href="#" >
              Another thing to do
            </Menu.Item>

            <Menu.Item href="https://developer.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              floated='right'>
              Check out Spotify's API
            </Menu.Item>
          </Container>
        </Menu>
        <Container>
          <Routes />
        </Container>
      </div>
      );
  }

}

export default App;
