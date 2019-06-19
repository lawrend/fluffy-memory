import React, { Component } from 'react';
import axios from 'axios';
import LocationData from '../components/LocationData.js';
import LocationDetail from '../components/LocationDetail';
import { List, Divider } from 'semantic-ui-react';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center:{lat: 36.8097343, lng: -91.5556199},
      selected_location_species: [],
      locations: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //get all locations and set state.locations
    axios.get('/api/locations')
      .then(resp => {
        const locations = resp.data;
        this.setState({...this.state, locations: locations})
      })
  }

  handleClick(id) {
    //get lat/long of given location and set state.center
    axios.get('/api/locations/getmap/' + id)
      .then(response => {
        this.setState((center) => {return {...this.state, center: response.data}}
        )
      })
      .catch(error => console.log(error));
    //retrieve all species from a given location set state
    axios.get('/api/locations/getspecies/' + id )
      .then(response => {
        let specs = response.data;
        this.setState((selected_location_species) => {return {...this.state, selected_location_species: response.data}}
        )
      })
      .catch(error => console.log(error));
  }

  render(){
    //console
    console.log("selected location species: ", this.state.selected_location_species);
    //LocationDetail displays current map; LocationData is a container for all the locations
    return(
      <div >
        <div className="maps homepage">
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
