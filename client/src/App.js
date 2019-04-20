import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import { Menu, Container } from 'semantic-ui-react';

class App extends Component {
  componentDidMount() {
    window.fetch('/api/locations/2')
      // .then(response => console.log("response to json addy ", response.body))
      .then(response => response.json())
      .then(json => console.log('response.json is: ', json))
      // .then(json => console.log(json.results[0]['geometry']['location']['lat']))
      .catch(error => console.log(error));
  }
  render() {
        return (
      <div className="App" >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item href="/" header>
              Home
            </Menu.Item>

            <Menu.Item href="/species-form" >
                Species Data
            </Menu.Item>
            <Menu.Item href="/location-form" >
                Location Data
            </Menu.Item>

            <Menu.Item href="https://developer.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              floated='right'>
              Check out Spotify's API
            </Menu.Item>
          </Container>
        </Menu>

      <div id="map1"></div>
        <Container>
          <Routes />
        </Container>
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=#{ENV['MAPS_KEY']}&callback=initMap"> type="text/javascript"></script>


      </div>
      );
  }

}

export default App;
