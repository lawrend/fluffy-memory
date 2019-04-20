import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import { Card, Divider } from 'semantic-ui-react';
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

  handleClick(place) {
    console.log(place)
  }

  render(){
    console.log(this.state.locations)
    return(
      <div>
          this is the location data container
        <Divider />
        <Card.Group centered>
        <LocationData handleClick={this.handleClick} locations={this.state.locations}/>
      </Card.Group>
      </div>
    )
  }
}

export default LocationForm
