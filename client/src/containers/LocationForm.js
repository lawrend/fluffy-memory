import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import { Card, Divider } from 'semantic-ui-react';
import axios from 'axios';
import MAPS_KEY from '../.env.local';


const initMap = center => {
  // let one_map = new google.maps.Map(document.getElementById('map1'), {
  //     center: center,
  //     zoom: 8
  //   })
  console.log("initMap was called and this is center: ", center)
}

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

    // let map = new google.maps.Map(document.getElementById('map1'), {
    //   center: center,
    //   zoom: 8
    // });

  handleClick(id) {
    let cent = axios.get('/api/locations/getmap/' + id)
      .then(response => {
        return response
        // .then(response => {
        //   console.log(response.data.results)
      })
      .catch(error => console.log(error));

    initMap(cent)

    // let mapper = new google.maps.Map(document.getElementById('map1'), {
    //   center: cent,
    //   zoom: 8
    // })

    // let map = new google.maps.Map(document.getElementById('map1'), {
    //   center: cent,
    //   zoom: 8,
    // })
  }

  render(){
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
