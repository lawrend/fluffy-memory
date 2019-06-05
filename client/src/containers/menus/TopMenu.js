import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

        <Menu pointing secondary>
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                position='right'
              />
            </Menu>
            )
}
}
