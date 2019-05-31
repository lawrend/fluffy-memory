import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';

export class MapsContainer extends React.Component {

  render () {
    const styles =
      [{featureType: 'poi.business',
        stylers: [{
          visibility: 'off',
        }]
      },
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


    if (!this.props.loaded) {
      return (
        <Container>
          <div>Loading...</div>
        </Container>
          )
    } else {

      return (
        <Map google={this.props.google} zoom={11} center={this.props.center} styles={styles}>
          <Marker title={"They in trubbs!!!"} name={'Right Here'} position={this.props.center} />
        </Map>
          )
}
}
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(MapsContainer)

// lat={33.0892941} lng={87.0623622}
//maps
