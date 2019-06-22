import React, { Component } from 'react';
import { List, Icon, Divider, Dropdown } from 'semantic-ui-react';

class SpeciesStates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStateSelected: false,
      isActive: false,
    };
}

  render() {
    let places = this.props.selectedStLocations.map(l => <div><List.Icon name="leaf" /> <List.Item content={l.loc} /></div> )

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
export default SpeciesStates;

