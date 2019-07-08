import React, { Component } from 'react';
import { List, Divider, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSelectedStLocationsMarkers } from '../store/actions/maps/setMarkers.js';
import { setSelectedProtectedArea } from '../store/actions/locations/setSelectedProtectedArea.js'

const mapStateToProps = state => ({
  selectedStLocations: state.locations.selectedStLocations,

})
const mapDispatchToProps = dispatch => ({
  markerMaker(locs) {
    return dispatch(getSelectedStLocationsMarkers(locs))
  },
  })


class StatesDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStateSelected: false,
      isActive: false,
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
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
    let places = this.props.selectedStLocations.map(l => <div><List.Icon name="leaf" /> <List.Item content={l.loc} /></div> )

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

export default connect(mapStateToProps, mapDispatchToProps)(StatesDropdown);
