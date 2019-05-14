import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';

export class MapsContainer extends React.Component {
  render () {
    if (!this.props.loaded) {
      return <div>Loading...</div>
        } else {
          return (
            <Map google={this.props.google} zoom={14} center={this.props.center} >
                <div>
                  <h1>Map?</h1>
                </div>
            </Map>
              )
        }
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(MapsContainer)

// lat={33.0892941} lng={87.0623622}
