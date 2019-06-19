import React from 'react';
import {Dropdown } from 'semantic-ui-react';

const SpeciesStates = (props) => {
  console.log(props)

  return (

    <Dropdown
      onChange={props.handleLocationChange}
      placeholder="Select State"
      clearable
      selection
      fluid
      options={props.stnames}
    />

      )
};

export default SpeciesStates;

