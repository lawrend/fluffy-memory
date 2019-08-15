import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSelectedStSpecies } from '../store/actions/species/setLocationSpecies.js';
import SpeciesItem from './SpeciesItem';

const mapStateToProps = state => ({
  selectedLocationSpecies: state.species.selected_location_species,
})

const mapDispatchToProps = dispatch => ({
  selectedStSpeciesGetter(name) {
    return dispatch(getSelectedStSpecies(name))
  },
});

class LocationDetail extends Component {
  constructor(props) {
    super(props)
    this.placeName = this.props.match.params.name;
  }


  componentDidMount() {
    this.props.selectedStSpeciesGetter(this.placeName)
  };

  render() {

let species = this.props.selectedLocationSpecies.map(s => <SpeciesItem name={s.name} id={s.id} desc={s.desc} imgsrc={s.imgsrc}/> )
    return(
      <div>
        <h1>{this.placeName}</h1>
        <Card.Group centered>
          {species}
        </Card.Group>
        <h1><a href='/home'>Home</a></h1>
      </div>
        )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
