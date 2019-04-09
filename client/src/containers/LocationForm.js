import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import axios from 'axios';

class LocationForm extends Component {
  state = {
    locations: [],
  }

  componentDidMount() {
    axios.get('/api/locations')
      .then(resp => {
        const locations = resp.data;
        this.setState({locations})
      })
  }

  render(){
    console.log(this.state.locations)
    return(
      <div>
          this is the location data container
        <LocationData locations={this.state.locations}/>
      </div>
    )
  }
}

export default LocationForm
