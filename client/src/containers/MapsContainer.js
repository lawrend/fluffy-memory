import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';
import Waiter from '../components/Loader.js';
import cromlech from '../resources/cromlech.png';

export class MapsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      showingInfoWindow: false,
      selectedPlace: this.props.selectedProtectedArea,
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.props.setSelectedProtectedArea({name: props.name, id: props.id })
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      // selectedPlace: props,
    })
  };

  onMarkerHover = (props, marker, e) => {
    this.props.setSelectedProtectedArea({name: props.name, id: props.id })
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      // selectedPlace: props,
    })
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
    const icon_url = {url: cromlech, scaledSize: new this.props.google.maps.Size(54, 54)};

    let markers = this.props.locations.map(l=> { return <Marker icon={icon_url} onMouseover={this.onMarkerHover} onClick={this.onMarkerClick} position={{lat: l.lat, lng: l.long}} title={l.loc} name={l.loc} id={l.id} >
    </Marker>})

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
              <div><a href={'/location-detail/' + this.props.selectedProtectedArea.name}>
                  <h1>{this.props.selectedProtectedArea.name}</h1>
                  <h5>{this.props.selectedPlace}</h5>
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

//to make map un navigatable use gestureHandling={'none'}
