import React, { Component } from 'react';
import LocationListing from '../components/LocationListing.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  species_locations: state.species.species_locations,
})

class LocationListingsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let species_locations =
  this.props.species_locations.map(l => <LocationListing name={l.name} id={l.id} />)
    return(
      <div>
        {species_locations}
      </div>
    )
  }
}

export default connect(mapStateToProps)(LocationListingsContainer);
