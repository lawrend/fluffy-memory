import axios from 'axios';

export const SET_SELECTED_ST = "SET_SELECTED_ST";

const setSelSt = selectedSt => ({
  type: SET_SELECTED_ST,
  payload: selectedSt,
})

export const SET_SELECTED_ST_LOCATIONS = "SET_SELECTED_ST_LOCATIONS";

const setSelStLoc = selectedStLocations => ({
  type: SET_SELECTED_ST_LOCATIONS,
  payload: selectedStLocations,
})


export const setSelectedSt = selectedSt => dispatch => {

  dispatch(setSelSt(selectedSt))

  axios.get('/api/states/locations/' + selectedSt)
    .then(resp => {
      const locations = resp.data;
      dispatch(setSelStLoc(locations))
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
