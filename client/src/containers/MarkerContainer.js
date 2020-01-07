import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker } from 'google-maps-react';
import Waiter from '../components/Loader.js';

class MarkerContainer extends Component {
  render() {
    return (
    this.props.locations.map(l=> <Marker icon={this.props.icon_url} onClick={this.props.onMarkerClick} onMouseover={this.props.onMarkerHover} position={{lat: l.lat, lng: l.long}} name={l.loc} key={l.id} >
      </Marker>)

)
}}

export default MarkerContainer;
