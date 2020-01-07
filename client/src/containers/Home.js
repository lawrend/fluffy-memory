import React, { Component } from 'react';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { setSelectedProtectedArea } from '../store/actions/locations/setSelectedProtectedArea.js';
import { setMapCenter, setMapZoom } from '../store/actions/maps/getMap.js'
import { setActiveMarker, setMarkers } from '../store/actions/maps/setActiveMarker.js'
import { getStNames } from '../store/actions/locations/getLocations.js';
import { setSelectedSt, getSelectedStLocations } from '../store/actions/locations/setSelectedLocation.js';
import { connect } from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';
import '../css/header.css';

const USA_CENTER = {lat: 36.8097343, lng: -91.5556199};
const HIGH_ZOOM = 5;

class Home extends Component {
  constructor(props) {
    super(props)
    this.resetMap = this.resetMap.bind(this);
  }

  resetMap() {
    this.props.zoomSetter(HIGH_ZOOM);
    this.props.centerSetter(USA_CENTER);
    this.props.selectedStSetter(null);
    this.props.selectedStLocationsGetter(null);
  }

  componentDidMount() {
    this.props.stNamesGetter();
  }

  render() {
    console.log("home selectedProtectedArea is: ", this.props.selectedProtectedArea)
    console.log("active marker is: ", this.props.activeMarker)
    return (
      <div>
        <Header fixed='top' >
          <div className="header-text">
            endangered
          </div>
        </Header>

        <LeftSideMenu resetMap={this.resetMap} />
        <div className='maps homepage'>
          <MapsContainer
          zoom={this.props.zoom}
          center={this.props.center}
          locations={this.props.selectedStLocations}
          activeMarker={this.props.activeMarker}
          selectedProtectedArea={this.props.selectedProtectedArea}
          setSelectedProtectedArea={this.props.protectedAreaSelector}
          setActiveMarker={this.props.setActiveMarker}
          setMarkers={this.props.setMarkers}
        />
            <Divider />
          </div>
        </div>
        )
  }
}

const mapStateToProps = state => ({
  selectedStLocations: state.locations.selectedStLocations,
  selectedProtectedArea: state.locations.selectedProtectedArea,
  zoom: state.maps.zoom,
  center: state.maps.center,
  activeMarker: state.maps.activeMarker,
})

const mapDispatchToProps = dispatch => ({
  protectedAreaSelector(area) {
    return dispatch(setSelectedProtectedArea(area))
  },
  zoomSetter(zoom) {
    return dispatch(setMapZoom(zoom))
  },
  centerSetter(center) {
    return dispatch(setMapCenter(center))
  },
  setActiveMarker(marker) {
    return dispatch(setActiveMarker(marker))
  },
  stNamesGetter() {
    return dispatch(getStNames)
  },
  selectedStSetter(loc) {
    return dispatch(setSelectedSt(loc))
  },
  selectedStLocationsGetter(st) {
    return dispatch(getSelectedStLocations(st))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


