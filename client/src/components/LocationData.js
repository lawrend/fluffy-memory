import React, { Component } from 'react';
import LocationItem from '../components/LocationItem.js'

const LocationData = (props) => {
  return props.locations.map(spec =>
    <LocationItem loc={spec.loc} key={spec.id}/>)
};

export default LocationData

