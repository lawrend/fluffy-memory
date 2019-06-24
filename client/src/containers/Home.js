import React, { Component } from 'react';
import LeftSideMenu from './menus/LeftSideMenu.js';
import TopMenu from './menus/TopMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { getStNames } from '../store/actions/getLocations.js';
import { setMapCenter, setSelectedStMap, setSelectedSt, getSelectedStLocations, setMapZoom } from '../store/actions/setSelectedLocation.js';
import { getSelectedStSpecies } from '../store/actions/setLocationSpecies.js';
import { connect } from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';
import '../css/header.css';

const USA_CENTER = {lat: 36.8097343, lng: -91.5556199};
const HIGH_ZOOM = 5;

const mapStateToProps = state => ({
  locations: state.locations.locations,
  species: state.species.species,
  stnames: state.locations.stnames,
  selectedSt: state.locations.selectedSt,
  center: state.locations.center,
  selectedStLocations: state.locations.selectedStLocations,
  selectedStSpecies: state.locations.selectedStSpecies,
  zoom: state.locations.zoom
})

const mapDispatchToProps = dispatch => ({
  stNamesGetter() {
    return dispatch(getStNames)
  },
  selectedStSpeciesGetter(st) {
    return dispatch(getSelectedStSpecies(st))
  },
  selectedStMapSetter(loc) {
    return dispatch(setSelectedStMap(loc))
  },
  selectedStSetter(loc) {
    return dispatch(setSelectedSt(loc))
  },
  selectedStLocationsGetter(st) {
    return dispatch(getSelectedStLocations(st))
  },
  zoomSetter(zoom) {
    return dispatch(setMapZoom(zoom))
  },
  centerSetter(center) {
    return dispatch(setMapCenter(center))
  },
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.resetMap = this.resetMap.bind(this);
  }

  resetMap() {
    this.props.zoomSetter(HIGH_ZOOM);
    this.props.centerSetter(USA_CENTER)
    this.props.selectedStSetter("None");
    this.props.selectedStLocationsGetter(null)
  }

  componentDidMount() {
    this.props.stNamesGetter();
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
        <LeftSideMenu locations={this.props.locations} stnames={this.props.stnames} selectedSt={this.props.selectedSt} selectedStLocations={this.props.selectedStLocations} setSelectedStMap={this.props.selectedStMapSetter} getSelectedStLocations={this.props.selectedStLocationsGetter} getSelectedStSpecies={this.props.selectedStSpeciesGetter} resetMap={this.resetMap} />
        <div className='maps homepage'>
          <MapsContainer zoom={this.props.zoom} center={this.props.center} locations={this.props.locations}/>
          <Divider />
        </div>
      </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// Copy of Header above before change
// <Header>
//           <div className="header-text">
//               endangered
//           </div>
//           <div className="header-tabs">
//               species
//           </div>
//         </Header>

