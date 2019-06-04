import React, { Component } from 'react';
import TopMenu from '../containers/menus/TopMenu.js';
import LeftSideMenu from '../containers/menus/LeftSideMenu.js';
import Blackness from '../components/Blackness.js';
import { Container } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);
    }

  componentDidMount() {
    console.log("home component mounted")
  }

  render() {
        return (
          <div >
         </div>
    )
}
}

export default Home;


// this.state = {
//       showMenu: true,
//     }
//     this.toggleMenu = this.toggleMenu.bind(this);
// toggleMenu() {
//     this.setState({
//       showMenu: !this.state.showMenu,
//     })
//   }


