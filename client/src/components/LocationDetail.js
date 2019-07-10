import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { getSelectedStSpecies } from '../store/actions/species/setLocationSpecies.js';

const mapStateToProps = state  => ({
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

    let species = this.props.selectedLocationSpecies.map(s => <div><List.Icon name="leaf" /> <List.Item content={s.name} id={s.id} /></div> )
    return(
      <div>
        <h1>STILL HERE BRUH!!!!</h1>
        <h2>{this.placeName}</h2>
        <List>
          {species}
        </List>
        <h4><a href='/home'>Home</a></h4>
      </div>
        )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
