import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import { Card, Divider } from 'semantic-ui-react';
import axios from 'axios';


class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      center: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/locations')
      .then(resp => {
        const locations = resp.data;
        this.setState({locations})
      })
  }

  handleClick(id) {

    axios.get('/api/locations/getmap/' + id)
      .then(response => {
        console.log(response.data);
        this.setState((center) => {return {...this.state, center: response.data}}
        )
      })
      .catch(error => console.log(error));
  }

  render(){
    return(
      <div>
          this is the location data container
        <Divider />
          {this.state.center === {} ? null : <LocationDetail center={this.state.center} />}
        <Card.Group centered>
          <LocationData handleClick={this.handleClick} locations={this.state.locations} center={this.state.center} />
        </Card.Group>

      </div>
        )
  }
}

export default LocationForm
