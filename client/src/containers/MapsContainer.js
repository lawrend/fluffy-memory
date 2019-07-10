import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';
import { Route } from 'react-router-dom';
import shelter from '../resources/shelter.png';
import iboga from '../resources/iboga.png';

export class MapsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      showingInfoWindow: false,
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      selectedPlace: props,
    })
    this.props.setSelectedProtectedArea({name: props.name, id: props.id })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render () {
    const icon_url = {url: iboga, scaledSize: new this.props.google.maps.Size(64, 64)}
    let markers = this.props.locations.map(l=> { return <Marker icon={icon_url} onClick={this.onMarkerClick} position={{lat: l.lat, lng: l.long}} title={l.loc} name={l.loc} id={l.id} >
      </Marker>})
    let locationRouteLink = "/location-detail/" + this.state.selectedPlace.id;
    console.log("local map state is: ", this.state)

    //map styles
    const styles =
      [
        {featureType: 'poi.business',
          stylers: [
            {visibility: 'off'},
          ]
        },
        {featureType: 'all',
          stylers: [
            {saturation: -100},
          ]
        },
        {featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {'color': '#27A73A'},
            {'opacity': 1},
          ]
        },
        {featureType: 'poi.park',
          elementType: 'labels.text',
          stylers: [
            {'color': '#2C3031'},
            {'weight': .4},
          ]
        },
        {featureType: 'administrative.locality',
          elementType: 'labels.text',
          stylers: [
            {'weight': .2},
            {'color': '#3A3D36'},
          ]
        },
        {featureType: 'water',
          stylers: [
            {'color': '#6F7661'}
            // {'color': '#00AAF3'}
          ]
        },
      ]

    if (!this.props.loaded) {
      return (
        <Container>
          <div>Loading...</div>
        </Container>
          )
    } else {
      return (
        <div>
          <Map google={this.props.google} zoom={this.props.zoom} mapType={'terrain'} mapTypeControl={false} initialCenter={this.props.center} center={this.props.center} styles={styles} onClick={this.onMapClicked} >
              {markers}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
            <div><a href={'/location-detail/' + this.state.selectedPlace.name}>
                <h1>{this.state.selectedPlace.name}</h1>
            </a></div>
          </InfoWindow>

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
//
//to make map un navigatable use gestureHandling={'none'}
