import axios from 'axios';

export const setSelectedSt = selectedSt => dispatch => {
  dispatch(setSelSt(selectedSt))
  dispatch(setMapZoom(7))

  axios.get('/api/states/locations/' + selectedSt)
    .then(resp => {
      const locations = resp.data;
dispatch(setSelStLoc(locations))
    })
    .catch(error => console.log(error));

  axios.get('/api/states/sel_st_map/' + selectedSt)
    .then(resp => {
      const center = resp.data;
dispatch(setMapCenter(center))
    })
    .catch(error => console.log(error));

}


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

export const SET_MAP_CENTER = "SET_MAP_CENTER";
const setMapCenter = center => ({
  type: SET_MAP_CENTER,
  payload: center,
})

export const SET_MAP_ZOOM = "SET_MAP_ZOOM";
const setMapZoom = zoom => ({
  type: SET_MAP_ZOOM,
  payload: zoom,
})



