import React, { Component } from 'react';
import { Divider, Dropdown } from 'semantic-ui-react';

class SpeciesStates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStateSelected: false,
      isActive: false,
    };
  }

  render() {

    console.log("isActive: " + this.state.isActive + "  is st selected: " + this.state.isStateSelected)

    return (
      <div>
        <Dropdown
          onChange={this.props.handleLocationChange}
          placeholder="Select State"
          fluid
          scrolling
          options={this.props.stnames}
        />
          <Divider />
          <Dropdown
            onChange={this.props.handleProtectedAreasChange}
            placeholder="Protected Areas"
            fluid
            scrolling
            options={this.props.selectedStLocations}
          />
          <Divider />
          <Dropdown
            onChange={this.props.handleSpeciesChange}
            placeholder="Species"
            fluid
            scrolling
            options={this.props.species}
          />
          </div>

            )
  };
}
export default SpeciesStates;

