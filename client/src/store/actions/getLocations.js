import axios from 'axios';
let request = require('request');

export const SET_LOCATIONS = "SET_LOCATIONS";

const setLocations = locations => ({
  type: SET_LOCATIONS,
  payload: locations,
})

export const getLocations = () => {
  console.log("getLocatoins called")
  axios.get('/api/locations')
    .then(resp => {
      console.log("api locations response", resp.data)
      const locations = resp.data;
    }).then(locations => {
      // dispatch(setLocations(locations))
    })
    .catch(error => console.log(error));

}
