import axios from 'axios';
import {setSelectedStLocations} from './setSelectedLocation.js';
export const SET_ST_LOCATIONS_MARKERS = 'SET_ST_LOCATIONS_MARKERS';
const setSelectedStLocationsMarkers = markerInfo => ({
  type: SET_ST_LOCATIONS_MARKERS,
  payload: markerInfo
})

export const getSelectedStLocationsMarkers = st => dispatch => {
  axios.get('/api/states/locations/markers/' + st)
    .then(resp => {
      const new_locations = resp.data;
      console.log(new_locations)
    })
    .catch(error => console.log(error));
  // dispatch(setSelectedStLocationsMarkers(locs))
}




