import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SpeciesStates from '../SpeciesStates.js';

export default class LeftSideMenu extends Component {
  //default
  state = {
    activeItem: 'home',
    stnames: ["Georgia"],
  }

  //changes active menu item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed='left' inverted>

        <Link  to={"/"}
          name='home'
          onClick={this.handleItemClick}
        >
          <Menu.Item
            active={activeItem === 'home'}
            name='home'
          />
          </Link>

          <Link to={"/species-form"}
            name='species'
            onClick={this.handleItemClick}
          >
            <Menu.Item
              name='species'
              active={activeItem === 'species'}
            />
            </Link>


              <Menu.Item
                name='locations'
                active={activeItem === 'locations'}

              onClick={this.handleLocationClick}
              >
                <Dropdown text="Locations">
                  <Dropdown.Menu>
                    <SpeciesStates stnames={this.state.stnames} />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
          </Menu>
            )
}
}

//   <Menu fixed='left' vertical inverted>
//     <Container>
//       <Menu.Item href="/" header>
//           Home
//       </Menu.Item>

//       <Menu.Item href="/species-form" >
//           Species Data
//       </Menu.Item>
//       <Menu.Item href="/location-form" >
//           Location Data
//       </Menu.Item>

//     </Container>
//   </Menu>

