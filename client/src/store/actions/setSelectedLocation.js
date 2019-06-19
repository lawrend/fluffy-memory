import axios from 'axios';

export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION";

export const setSelectedLocation = selectedLocation => ({
  type: SET_SELECTED_LOCATION,
  payload: selectedLocation,
})


export const SET_MAP_CENTER = "SET_MAP_CENTER";

export const setMapCenter = center => ({
  type: SET_MAP_CENTER,
  payload: center,
})

export const getMapCenter = loc => dispatch => {
  axios.get('/api/locations/getmap')
}
