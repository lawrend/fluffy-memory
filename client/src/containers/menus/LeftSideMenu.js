import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LeftSideMenu extends Component {
  //default
  state = { activeItem: 'home' }

  //changes active menu item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fixed='left' inverted>

        <Link  to={"/"}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to={"/species-form"}>
            <Menu.Item
              name='species'
              active={activeItem === 'species'}
              onClick={this.handleItemClick}
            />
            </Link>


            <Link to={"/location-form"}>
              <Menu.Item
                name='locations'
                active={activeItem === 'locations'}
                onClick={this.handleItemClick}
              />
              </Link>

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

