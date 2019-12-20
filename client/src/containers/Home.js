import React, { Component } from 'react';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { setMapCenter, setSelectedStMap, setMapZoom } from '../store/actions/maps/getMap.js'
import { getStNames } from '../store/actions/locations/getLocations.js';
import { setSelectedSt, getSelectedStLocations } from '../store/actions/locations/setSelectedLocation.js';
import { setSelectedProtectedArea } from '../store/actions/locations/setSelectedProtectedArea.js';
import { getSelectedStSpecies } from '../store/actions/species/setLocationSpecies.js';
import { connect } from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';
import '../css/header.css';

const USA_CENTER = {lat: 36.8097343, lng: -91.5556199};
const HIGH_ZOOM = 5;

const mapStateToProps = state => ({
  selectedProtectedArea: state.locations.selectedProtectedArea,
  locations: state.locations.locations,
  species: state.species.species,
  stnames: state.locations.stnames,
  selectedSt: state.locations.selectedSt,
  center: state.maps.center,
  selectedStSpecies: state.locations.selectedStSpecies,
  zoom: state.maps.zoom,
  selectedStLocations: state.locations.selectedStLocations,
})

const mapDispatchToProps = dispatch => ({
  protectedAreaSelector(area) {
    return dispatch(setSelectedProtectedArea(area))
  },
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
    this.props.selectedStSetter(null);
    this.props.selectedStLocationsGetter(null)
  }

  onClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      selectedPlace: props,
    })
    this.protectedAreaSelector({name: props.name, id: props.id})
  };

  componentDidMount() {
    this.props.stNamesGetter();
  }

  render() {
    console.log("home selectedProtectedArea is: ", this.props.selectedProtectedArea)
    return (
      <div>
        <Header fixed='top' >
          <div className="header-text">
              endangered
          </div>
        </Header>
        <LeftSideMenu locations={this.props.locations} stnames={this.props.stnames} selectedSt={this.props.selectedSt}  setSelectedStMap={this.props.selectedStMapSetter} getSelectedStLocations={this.props.selectedStLocationsGetter} getSelectedStSpecies={this.props.selectedStSpeciesGetter} resetMap={this.resetMap} />
        <div className='maps homepage'>
          <MapsContainer zoom={this.props.zoom} center={this.props.center} locations={this.props.selectedStLocations} setSelectedProtectedArea={this.props.protectedAreaSelector} />
          <Divider />
        </div>
      </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

