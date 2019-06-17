import React, { Component } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeftSideMenu from './menus/LeftSideMenu.js';
import MapsContainer from '../containers/MapsContainer';
import { getLocations } from '../store/actions/getLocations.js';
import { getSpecies } from '../store/actions/getSpecies.js';
import { setSelectedLocation } from '../store/actions/setSelectedLocation.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Divider, Container } from 'semantic-ui-react';
import '../css/header.css';

//subscribes to state; will update upon state change
const mapStateToProps = state => ({
  locations: state.locations.locations,
  species: state.species.species,
  stnames: state.locations.stnames,
  selectedLocation: state.locations.selectedLocation,
})

//subscribes to the action(s); dispatch the action to the reducer
const mapDispatchToProps = dispatch => ({
  locationGetter() {
    return dispatch(getLocations)
  },
  speciesGetter() {
    return dispatch(getSpecies)
  },
  selectedLocationSetter(loc) {
    return dispatch(setSelectedLocation(loc))
  }
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      center: {lat: 36.8097343, lng: -91.5556199},
      selected_location_species: [],
      locations: [],
    }
  }

  componentDidMount() {
    this.props.locationGetter()
    this.props.speciesGetter()
  }

  render() {
    console.log("home locations", this.props.locations)
    console.log("all props", this.props)
    return (
      <div>
        <Header>
          <div className="header-text">
              endangered
          </div>
        </Header>
        <LeftSideMenu locations={this.props.locations} stnames={this.props.stnames} selectedLocation={this.props.selectedLocation} setSelectedLocation={this.props.selectedLocationSetter}/>
        <div className='maps homepage'>
          <MapsContainer center={this.state.center} locations={this.props.locations}/>
          <Divider />
        </div>
      </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// axios.get('/api/locations')
//       .then(resp => {
//         console.log("api locations response", resp.data)
//         const locations = resp.data;
//         this.setState({locations})
//       })
//       .catch(error => console.log(error));

//     axios.get('/api/locationsbystate')
//       .then(resp => {
//         console.log("api locationsbystate resp: ", resp.data)
//         const stnames = resp.data;
//         this.setState({stnames})
//       })
//       .catch(error => console.log(error));

//     axios.get('/api/species')
//       .then(resp => {
//         const species = resp.data;
//         this.setState({species})
//       })
//       .catch(error => console.log(error));

