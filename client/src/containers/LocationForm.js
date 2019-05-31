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
    axios.get('/api/locations')
      .then(resp => {
        const locations = resp.data;
        this.setState({locations})
      })

    // axios.get('/api/species')
    //   .then(resp => {
    //     const species = resp.data;
    //     this.setState({species})
    //   })


  }

  handleClick(id) {

    axios.get('/api/locations/getmap/' + id)
      .then(response => {
        console.log(response.data);
        this.setState((center) => {return {...this.state, center: response.data}}
        )
      })
      .catch(error => console.log(error));

    axios.get('/api/locations/getspecies/' + id )
      .then(response => {
        let specs = response.data;
        this.setState((specs) => {return {...this.state, selected_location_species: response.data}}
        )
      })
      .catch(error => console.log(error));
  }

  render(){
    console.log(this.state.selected_location_species);
    return(
      <div>
          this is the location data container
        <div className='maps'>
        <LocationDetail center={this.state.center} />
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
