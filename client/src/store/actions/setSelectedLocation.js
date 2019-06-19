import axios from 'axios';

export const SET_SELECTED_ST = "SET_SELECTED_ST";

const setSelLoc = selectedLocation => ({
  type: SET_SELECTED_ST,
  payload: selectedLocation,
})

export const setSelectedSt = selectedLocation => dispatch => {
  axios.get('/api/states/locations/' + selectedLocation)
    .then(resp => {
      const locations = resp.data;
      dispatch(setSelLoc(selectedLocation))
    })
    .catch(error => console.log(error));
}


export const SET_MAP_CENTER = "SET_MAP_CENTER";

export const setMapCenter = center => ({
  type: SET_MAP_CENTER,
  payload: center,
})

export const getMapCenter = loc => dispatch => {
  axios.get('/api/locations/getmap')
}
