import React from 'react';
import LocationItem from '../components/LocationItem.js'

const LocationData = (props) => {
  return props.locations.map(spec =>
    <LocationItem loc={spec.loc} st={spec.state} key={spec.id} handleClick={props.handleClick} id={spec.id} center={props.center} />)
};

export default LocationData

