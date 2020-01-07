import React, { Component } from 'react';
import { List, Divider, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSelectedStLocationsMarkers } from '../store/actions/maps/setMarkers.js';
import { getSelectedStLocations } from '../store/actions/locations/setSelectedLocation.js';
import { setSelectedProtectedArea } from '../store/actions/locations/setSelectedProtectedArea.js'
import { setSelectedStMap } from '../store/actions/maps/getMap.js'


class StatesDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStateSelected: false,
      isActive: false,
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
  }

  handleOnClick(e, value) {
    this.props.protectedAreaSelector(value);
  }

  handleMouseover() {
    console.log("moused over the list item");
  }

  handleLocationChange (e, {value}) {
    if (value !== null && value !== "") {
      console.log("handle location changed tripped with value of: ", value)
      this.props.getSelectedStLocations(value)
      this.props.setSelectedStMap(value)
      this.props.markerMaker(value)
    } else {
      this.props.getSelectedStLocations(null)
      console.log("handle location change tripped on dropdown with null or empty")
    }
  }


  render() {
    let places = this.props.selectedStLocations.map(l =>
      <div key={l.id}>
          <List.Icon className={"hover-list-icon"} name="leaf" />
        <div onMouseEnter={this.handleMouseover}>
          <List.Item
          content={l.loc}
          name={l.loc}
          key={l.id}
          id={l.id}
          onClick={this.handleOnClick}
          />
        </div>
      </div>)

    return (
      <div>
        <Dropdown
        onChange={this.handleLocationChange}
        placeholder="Select State"
        fluid
        scrolling
        clearable
        options={this.props.stnames}
      />
          <Divider />
          <List >
            <List.Content>
              {places}
            </List.Content>
          </List>
        </div>

        )
};
}

const mapStateToProps = state => ({
  selectedStLocations: state.locations.selectedStLocations,
  selectedProtectedArea: state.locations.selectedProtectedArea,
  stnames: state.locations.stnames,
})

const mapDispatchToProps = dispatch => ({
  markerMaker(locs) {
    return dispatch(getSelectedStLocationsMarkers(locs))
  },
  protectedAreaSelector(area) {
    return dispatch(setSelectedProtectedArea(area))
  },
  getSelectedStLocations(value) {
    return dispatch(getSelectedStLocations(value))
  },
  setSelectedStMap(st) {
    dispatch(setSelectedStMap(st))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(StatesDropdown);
