import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SpeciesStates from '../SpeciesStates.js';

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

handleLocationChange = (e, { value }) => this.props.setSelectedStMap(value)

handleProtectedAreasChange = (e, { value }) => this.props.setSelectedStMap(value)

handleSpeciesChange = (e, { value }) => this.props.setSelectedStMap(value)

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed='left' inverted >

        <Menu.Item name={this.props.selectedSt} />

          <Menu.Item
            active={activeItem === 'home'}
            name='home'
            onClick={this.handleItemClick}
          />


        <Link to={"/species-form"}
            name='species'
          >
            <Menu.Item
              name='species'
              active={activeItem === 'species'}
              onClick={this.handleItemClick}
            />
        </Link>


        <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
        >
            <SpeciesStates handleLocationChange={this.handleLocationChange} stnames={this.props.stnames} species={this.props.species} />
        </Menu.Item>
      </Menu>
     )
}
}


