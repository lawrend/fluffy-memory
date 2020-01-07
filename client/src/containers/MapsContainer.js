import React, { Component } from 'react';
import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';
import cromlech from '../resources/cromlech.png';

export class MapsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
    }
  }

  // componentDidMount() {
    // this.props.setMarkers(markers)
  // }

  //   this.setState({
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //     // selectedPlace: props,
  //   })
  // };

  onMarkerHover = (props, marker, e) => {
    if(props.name !== this.props.selectedProtectedArea.name) {
      this.props.setSelectedProtectedArea({name: props.name, id: props.id })
      this.props.setActiveMarker(marker)
    }
    if (!this.state.showingInfoWindow) {
      this.props.setActiveMarker(marker)
      this.setState({
        showingInfoWindow: true,
      })
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.props.setSelectedProtectedArea({name: props.name, id: props.id })
    this.props.setActiveMarker(marker)
  }

  onMapClicked = (props) => {
    this.props.setActiveMarker(null)
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
      });
    }
  }

  render () {
    const icon_url = {url: cromlech, scaledSize: new this.props.google.maps.Size(34, 34)};

    let markers = this.props.locations.map(l=> { return <Marker icon={icon_url} onClick={this.onMarkerClick} onMouseover={this.onMarkerHover} position={{lat: l.lat, lng: l.long}} name={l.loc} key={l.id} >
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

    return (
      <div>
        <Map google={this.props.google} zoom={this.props.zoom} mapType={'terrain'} mapTypeControl={false} initialCenter={this.props.center} center={this.props.center} styles={styles} onClick={this.onMapClicked} >
          {markers}
          <InfoWindow
          marker={this.props.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div><a href={'/location-detail/' + this.props.selectedProtectedArea.name}>
              <h1>{this.props.selectedProtectedArea.name}</h1>
          </a></div>
        </InfoWindow>
      </Map>
    </div>
    )
}
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(MapsContainer)

//to make map un navigatable use gestureHandling={'none'}
