import React, { Component } from 'react';
import LocationData from '../components/LocationData.js';
import { Card, Divider } from 'semantic-ui-react';
import axios from 'axios';
import {MAPS_KEY} from '../config.js';

const loadScript = () => {
  var script  = document.createElement("script");
  // script.defer = true;
  script.async = true;
  script.type = "text/javascript";
  script.src  = "http://maps.googleapis.com/maps/api/js?key=" + MAPS_KEY + "&callback=initMap";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  console.log("loadScript was called");
};

//FUNCTION TO LOAD THE GOOGLE MAPS API
//

// let map = new google.maps.Map(document.getElementById('map1'), {
//   center: center,
//   zoom: 8
// });


class LocationForm extends Component {
  state = {
    locations: [],
  }


  componentDidMount() {
    loadScript();
    axios.get('/api/locations')
      .then(resp => {
        const locations = resp.data;
        this.setState({locations})
      })
  }


  handleClick(id) {
    let map;
    function initMap(center) {
      let mapOptions = {
        zoom: 8,
        center: center,
      }
      // map = new google.maps.Map(document.getElementById('map1'), mapOptions );

      console.log("initMap was called and this is center: ", center)
    };

    let cent = axios.get('/api/locations/getmap/' + id)
      .then(response => {
        console.log(response.data);
        initMap(response.data);
        // return response.data;
        // .then(response => {
      })
      .catch(error => console.log(error));
    // initMap(cent);

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
