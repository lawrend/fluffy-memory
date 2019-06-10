import React from 'react';
import {Dropdown, Item } from 'semantic-ui-react';

const SpeciesStates = (props) => {

  return props.stnames.map(st =>
    <Dropdown.Item>{st}</Dropdown.Item>  )
}

export default SpeciesStates;


