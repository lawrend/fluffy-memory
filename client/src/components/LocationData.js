import React, { Component } from 'react';
import LocationItem from '../components/LocationItem.js'
import { Card, Divider } from 'semantic-ui-react';

const LocationData = (props) => {
  return props.locations.map(spec =>
    <LocationItem loc={spec.loc} state={spec.state} key={spec.id}/>)
};

export default LocationData

