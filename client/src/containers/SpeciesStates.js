import React from 'react';
import {Menu, Dropdown, Item } from 'semantic-ui-react';

const SpeciesStates = (props) => {

  return (

    <Dropdown placeholder="State">
      <Dropdown.Menu>
          {props.stnames.map(st =>
        <Dropdown.Item>{st}</Dropdown.Item>  )}
      </Dropdown.Menu>

    </Dropdown>
      )
};

export default SpeciesStates;


