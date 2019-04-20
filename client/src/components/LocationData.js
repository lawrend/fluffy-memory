import React from 'react';
import LocationItem from '../components/LocationItem.js'

const LocationData = (props) => {
  return props.locations.map(spec =>
    <LocationItem loc={spec.loc} state={spec.state} key={spec.id} handleClick={props.handleClick}/>)
};

export default LocationData

