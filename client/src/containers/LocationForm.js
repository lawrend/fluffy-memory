import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import SpeciesData from '../components/SpeciesData.js';
import { List, Item, Card, Divider } from 'semantic-ui-react';
import axios from 'axios';
import LocationDetail from '../components/LocationDetail';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {},
      selected_location_species: [],
      locations: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //get all locations and set state.locations
    axios.get('/api/locations')
      .then(resp => {
//console
        console.log("result of locations: ", resp.data);
        const locations = resp.data;
        this.setState({locations})
      })
  }

  handleClick(id) {
    //get lat/long of given location and set state.center
    axios.get('/api/locations/getmap/' + id)
      .then(response => {
//console
        console.log("result of getmap + id: ", response.data);
        this.setState((center) => {return {...this.state, center: response.data}}
        )
      })
      .catch(error => console.log(error));

    //retrieve all species from a given location set state
    axios.get('/api/locations/getspecies/' + id )
      .then(response => {
//console
        console.log("result of getspecies + id: ", response.data);
        let specs = response.data;
        this.setState((specs) => {return {...this.state, selected_location_species: response.data}}
        )
      })
      .catch(error => console.log(error));
  }

  render(){
//console
    console.log("selected location species: ", this.state.selected_location_species);
    //LocationDetail displays current map; LocationData is a container for all the locations
    return(
      <div className='homepage'>
        <div className='maps'>
        <LocationDetail center={this.state.center} selected_location_species={this.selected_location_species} />
      </div>
        <Divider />
          <List>
          <LocationData handleClick={this.handleClick} locations={this.state.locations} center={this.state.center} selected_location_species={this.selected_location_species}/>
      </List>
      </div>
        )
  }
}

export default LocationForm
