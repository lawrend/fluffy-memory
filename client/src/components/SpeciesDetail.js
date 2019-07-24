import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// const mapStateToProps = state  => ({
//   selectedLocationSpecies: state.species.selected_location_species,
// })

// const mapDispatchToProps = dispatch => ({
//   selectedStSpeciesGetter(name) {
//     return dispatch(getSelectedStSpecies(name))
//   },
// });

// not currently used
export default props => (
  <Card id={props.id} >

<Link to='/'>
    <Card.Content>
      <Card.Header>
      Name: {props.name}
      </Card.Header>
        Having Trubbs!
    </Card.Content>

</Link>
  </Card>
)
