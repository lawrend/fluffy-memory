import React from 'react';
import SpeciesItem from '../components/SpeciesItem.js'

const SpeciesData = (props) => {
  return props.species.map(spec =>
    <SpeciesItem name={spec.name} status={spec.status} key={spec.id}/>)
};


export default SpeciesData

