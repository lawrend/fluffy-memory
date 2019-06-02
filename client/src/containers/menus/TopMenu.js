import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            href="/"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              href="/species-form"
              name='species'
              active={activeItem === 'species'}
              onClick={this.handleItemClick}i
            />
              <Menu.Item
                href="/location-form"
                name='locations'
                active={activeItem === 'locations'}
                onClick={this.handleItemClick}
              />
                <Menu.Menu position='right'>
                  <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                  />
                  </Menu.Menu>
                </Menu>
              </div>
                )
}
}
