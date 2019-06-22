import React, { Component } from 'react';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { getStNames } from '../store/actions/getLocations.js';
import { getSpecies } from '../store/actions/getSpecies.js';
import { setMapCenter, setSelectedStMap, setSelectedSt, setSelectedStLocations, setMapZoom } from '../store/actions/setSelectedLocation.js';
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
  zoom: state.locations.zoom
})

const mapDispatchToProps = dispatch => ({
  stNamesGetter() {
    return dispatch(getStNames)
  },
  speciesGetter() {
    return dispatch(getSpecies)
  },
  selectedStMapSetter(loc) {
    return dispatch(setSelectedStMap(loc))
  },
  selectedStSetter(loc) {
    return dispatch(setSelectedSt(loc))
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
        <LeftSideMenu locations={this.props.locations} stnames={this.props.stnames} selectedSt={this.props.selectedSt} setSelectedStMap={this.props.selectedStMapSetter} resetMap={this.resetMap} />
        <div className='maps homepage'>
          <MapsContainer zoom={this.props.zoom} center={this.props.center} locations={this.props.locations}/>
          <Divider />
        </div>
      </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

