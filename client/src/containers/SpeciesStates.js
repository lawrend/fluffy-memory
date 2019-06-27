import React, { Component } from 'react';
import { List, Icon, Divider, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSelectedStLocationsMarkers } from '../store/actions/setMarkers.js';

const mapStateToProps = state => ({
  selectedStLocations: state.locations.selectedStLocations,

})

const mapDispatchToProps = dispatch => ({
  markerMaker(locs) {
    return dispatch(getSelectedStLocationsMarkers(locs))
  },
})


class SpeciesStates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStateSelected: false,
      isActive: false,
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange (e, {value}) {
    this.props.setSelectedStMap(value)
    this.props.getSelectedStLocations(value)
    this.props.markerMaker(value)
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
          options={this.props.stnames}
        />
          <Divider />
          <List >
            <List.Content>
                {places}
            </List.Content>
          </List>
          <Dropdown
            placeholder="Species"
            fluid
            scrolling
            options={this.props.species}
          />
          </div>

            )
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesStates);
