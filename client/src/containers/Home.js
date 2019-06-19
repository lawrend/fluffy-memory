import React, { Component } from 'react';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { getLocations } from '../store/actions/getLocations.js';
import { getSpecies } from '../store/actions/getSpecies.js';
import { setSelectedSt } from '../store/actions/setSelectedLocation.js';
import { connect } from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';
import '../css/header.css';

//subscribes to state; will update upon state change
const mapStateToProps = state => ({
  locations: state.locations.locations,
  species: state.species.species,
  stnames: state.locations.stnames,
  selectedSt: state.locations.selectedSt,
  center: state.locations.center,
  selectedStLocations: state.locations.selectedStLocations,
  zoom: state.locations.zoom
})

//subscribes to the action(s); dispatch the action to the reducer
const mapDispatchToProps = dispatch => ({
  locationGetter() {
    return dispatch(getLocations)
  },
  speciesGetter() {
    return dispatch(getSpecies)
  },
  selectedStSetter(loc) {
    return dispatch(setSelectedSt(loc))
  }
})

class Home extends Component {

  componentDidMount() {
    this.props.locationGetter()
    this.props.speciesGetter()
  }

  render() {
    console.log(this.props.selectedStLocations)
    console.log("current center: ", this.props.center)
    return (
      <div>
        <Header>
          <div className="header-text">
              endangered
          </div>
        </Header>
        <LeftSideMenu locations={this.props.locations} stnames={this.props.stnames} selectedSt={this.props.selectedSt} setSelectedSt={this.props.selectedStSetter}/>
        <div className='maps homepage'>
          <MapsContainer zoom={this.props.zoom} center={this.props.center} locations={this.props.locations}/>
          <Divider />
        </div>
      </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

