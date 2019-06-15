import React, { Component } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { getLocations } from '../store/actions/getLocations.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Divider, Container } from 'semantic-ui-react';
import '../css/header.css';

//subscribes to state; will update upon state change
const mapStateToProps = state => ({
  locations: state.locations.locations,
  species: state.species.species,
})

//subscribes to the action(s); dispatch the action to the reducer
const mapDispatchToProps = dispatch => ({
  locationGetter(){
    return dispatch(getLocations())
  },
})



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      center: {lat: 36.8097343, lng: -91.5556199},
      selected_location_species: [],
      locations: [],
      stnames: [],
    }


  }

  componentDidMount() {
    axios.get('/api/locations')
      .then(resp => {
        console.log("api locations response", resp.data)
        const locations = resp.data;
        this.setState({locations})
      })
      .catch(error => console.log(error));

    axios.get('/api/locationsbystate')
      .then(resp => {
        console.log("api locationsbystate resp: ", resp.data)
        const stnames = resp.data;
        this.setState({stnames})
      })
      .catch(error => console.log(error));

    axios.get('/api/species')
      .then(resp => {
        const species = resp.data;
        this.setState({species})
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("home locations", this.state.locations)
    return (
      <div>
        <Header>
          <div className="header-text">
              endangered
          </div>
        </Header>
        <LeftSideMenu locations={this.state.locations} stnames={this.state.stnames} />
        <div className='maps homepage'>
          <MapsContainer center={this.state.center} locations={this.state.locations}/>
          <Divider />
        </div>
      </div>
        )
  }
}

export default Home;


