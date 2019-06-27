import React, { Component } from 'react';
import { Divider, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SpeciesStates from '../SpeciesStates.js';
import TopMenu from './TopMenu.js';

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
            <SpeciesStates stnames={this.props.stnames} selectedStLocations={this.props.selectedStLocations} setSelectedStMap={this.props.setSelectedStMap} getSelectedStLocations={this.props.getSelectedStLocations} />
          </Menu.Item>
        </Menu>
          )
}
}

// moved from menu above
//         <Link to={"/species-form"}
//           name='species'
//         >
//           <Menu.Item
//             name='species'
//             active={activeItem === 'species'}
//             onClick={this.handleItemClick}
//           />
//           </Link>


