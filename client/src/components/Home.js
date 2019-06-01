import React, { Component } from 'react';
import TopMenu from '../containers/menus/TopMenu.js';
import LeftSideMenu from '../containers/menus/LeftSideMenu.js';
import { Container } from 'semantic-ui-react';


class Home extends Component {
  componentDidMount() {
    console.log("home component mounted")
  }

  render() {
    return (
      <div className="homepage">
        <Container>
            Home Page
          <TopMenu />
          <LeftSideMenu />
        </Container>
      </div>
        )
  }

}

export default Home;


// export default props => (
// <div className="landing-page">
//   <Container>
//     <h1>Home Page</h1>
// </Container>
// </div>
// )

// class Home extends Component {
//   componentDidMount() {
//     console.log("app component mounted")
//   }

//   render() {
//     return (
//       <div className="App" >
//           <LeftSideMenu />

//         <div className="homepage">
//           <TopMenu />
//           <Container >
//             <Routes />
//           </Container>
//         </div>
//       </div>
//         );
//   }

// }

// export default Home;

// original Home code below...
// import React from 'react';
// import { Container, Divider } from 'semantic-ui-react';

// export default props => (
//   <div className="landing-page">
//     <Container>
//       <h1>Home Page</h1>
//   </Container>
//   </div>
// )

