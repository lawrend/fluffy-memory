import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class LeftSideMenu extends Component {
  state = { activeItem: 'species' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu vertical fixed='left' inverted>
          <Menu.Item
            name='species'
            active={activeItem === 'species'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              name='locations'
              active={activeItem === 'locations'}
              onClick={this.handleItemClick}
            />
            </Menu>
          </div>
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

