import React, { Component } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import axios from 'axios';
import { Header, Divider, Container } from 'semantic-ui-react';
import '../css/header.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      center: {lat: 36.8097343, lng: -91.5556199},
      selected_location_species: [],
      locations: [],
    }

    // this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    axios.get('/api/locations')
      .then(resp => {
        console.log("api locations response", resp.data)
        const locations = resp.data;
        this.setState({locations})
      })
      .catch(error => console.log(error));

    axios.get('/api/species')
      .then(resp => {
        const species = resp.data;
        this.setState({species})
      })
      .catch(error => console.log(error));
  }


  //handleClick(id) {
  //  //get lat/long of given location and set state.center
  //  axios.get('/api/locations/getmap/' + id)
  //    .then(response => {
  //      //console
  //      console.log("result of getmap + id: ", response.data);
  //      // this.setState((center) => {return {...this.state, center: response.data}}
  //      // )
  //    })
  //    .catch(error => console.log(error));

  //  //retrieve all species from a given location set state
  //  axios.get('/api/locations/getspecies/' + id )
  //    .then(response => {
  //      //console
  //      console.log("result of getspecies + id: ", response.data);
  //      let specs = response.data;
  //      this.setState((specs) => {return {...this.state, selected_location_species: response.data}}
  //      )
  //    })
  //    .catch(error => console.log(error));
  //}

  render() {
    console.log("home locations", this.state.locations)
    return (
      <div>
        <Header>
          <div className="header-text">
              endangered
          </div>
        </Header>
        <LeftSideMenu />
        <div className='maps homepage'>
          <MapsContainer center={this.state.center} locations={this.state.locations}/>
          <Divider />
        </div>
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


