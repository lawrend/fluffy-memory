import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import StatesDropdown from '../StatesDropdown.js';

export default class LeftSideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home',
    }
  }

  //changes active menu item
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = (e) => this.props.resetMap()


  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed='left' inverted >

        <Menu.Item
          active={activeItem === 'home'}
          name='All United States'
          onClick={this.handleItemClick}
        />
          <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
          >
            <StatesDropdown stnames={this.props.stnames} selectedStLocations={this.props.selectedStLocations} setSelectedStMap={this.props.setSelectedStMap} getSelectedStLocations={this.props.getSelectedStLocations} />
          </Menu.Item>
        </Menu>
          )
}
}

