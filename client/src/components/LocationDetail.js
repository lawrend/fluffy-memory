import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSelectedStSpecies } from '../store/actions/species/setLocationSpecies.js';
import SpeciesDetail from './SpeciesDetail';

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

    // let species = this.props.selectedLocationSpecies.map(s => <div><List.Icon name="leaf" /> <List.Item content={s.name} id={s.id} /></div> )
    // let species = this.props.selectedLocationSpecies.map(s => <Link to='/'><Card id={s.id} onClick={this.sendToSpeciesPage}><Card.Content><Card.Header>{s.name}</Card.Header></Card.Content></Card></Link> )

    let species = this.props.selectedLocationSpecies.map(s => <Link to='/'><SpeciesDetail name={s.name} id={s.id} /></Link> )
    return(
      <div>
        <h1>{this.placeName}</h1>
        <Card.Group centered itemsPerRow={1}>
          {species}
        </Card.Group>
        <h4><a href='/home'>Home</a></h4>
      </div>
        )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
