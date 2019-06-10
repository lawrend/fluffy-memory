import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';

export class MapsContainer extends Component {

  render () {
    console.log("maps center: ", this.props.center)
    const styles =
      [
        {featureType: 'poi.business',
          stylers: [{
            visibility: 'off',
          }]
        },
        {featureType: 'all',
          stylers: [{
            saturation: -100,
          }]},
        {featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{
            color: '#27e73A',
            opacity: 1,
          }]},
        // {featureType: 'poi.park',
        //   elementType: 'geometry',
        //   stylers: [{
        //     color: '#e21244',
        //   }]}
        // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      ]

    const style = {
      width: '100vw',
      height: '100vh',
    }

    // const data = this.props.locations;

    if (!this.props.loaded) {
      return (
        <Container>
          <div>Loading...</div>
        </Container>
          )
    } else {
      return (
        <div>
        <Map google={this.props.google} zoom={5} initialCenter={this.props.center} center={this.props.center} styles={styles}>
          <Marker
            position={this.props.center}
          />
        </Map>
      </div>
          )
}
}
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(MapsContainer)

// lat={33.0892941} lng={87.0623622}
//maps
