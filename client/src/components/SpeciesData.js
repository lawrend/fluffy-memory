//NOT BEING USED??
import React from 'react';
import SpeciesItem from '../components/SpeciesItem.js'

const SpeciesData = (props) => {
  return props.species.map(spec =>
    <div className={"species-card-css"}>
    <SpeciesItem name={spec.name} status={spec.status} key={spec.id}/></div>)
};


export default SpeciesData

