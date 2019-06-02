import React, { Component } from 'react';
import Routes from './routes';
import TopMenu from './containers/menus/TopMenu.js';
import LeftSideMenu from './containers/menus/LeftSideMenu.js';
// import { Menu, Container } from 'semantic-ui-react';
import Home from './components/Home.js';
import Blackness from './components/Blackness.js';

class App extends Component {
  componentDidMount() {
    console.log("app component mounted")
  }

  render() {
    return (
      <div>
         <Routes />
      </div>
    )
  }

}

export default App;

// <div class="ui right fixed vertical menu">
//   <div class="item">
//     <img class="ui mini image" src="/images/logo.png">
//   </div>
//   <a class="item">Features</a>
//   <a class="item">Testimonials</a>
//   <a class="item">Sign-in</a>
// </div>
//
// <Menu fixed='left' vertical inverted>
//           <Container>
//             <Menu.Item href="/" header>
//                 Home
//             </Menu.Item>

//             <Menu.Item href="/species-form" >
//                 Species Data
//             </Menu.Item>
//             <Menu.Item href="/location-form" >
//                 Location Data
//             </Menu.Item>

//           </Container>
//         </Menu>

