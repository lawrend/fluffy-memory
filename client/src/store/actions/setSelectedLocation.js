import axios from 'axios';

//sets State from dropdown

export const SET_SELECTED_ST = "SET_SELECTED_ST";
export const RESET_SELECTED_ST = "RESET_SELECTED_ST";

export function setSelectedSt(selectedSt) {
  if (selectedSt != null) {
    return {
      type: SET_SELECTED_ST,
      payload: selectedSt,
    }
  } else {
    return {
      type: RESET_SELECTED_ST
    }
  }
}

// pulls all locations for the selected state

export const SET_SELECTED_ST_LOCATIONS = "SET_SELECTED_ST_LOCATIONS";
export const setSelectedStLocations = selectedStLocations => ({
  type: SET_SELECTED_ST_LOCATIONS,
  payload: selectedStLocations,
})

// gereric set center and zoom of the map - should be elsewhere

export const SET_MAP_CENTER = "SET_MAP_CENTER";
export const setMapCenter = center => ({
  type: SET_MAP_CENTER,
  payload: center,
})
export const SET_MAP_ZOOM = "SET_MAP_ZOOM";
export const setMapZoom = zoom => ({
  type: SET_MAP_ZOOM,
  payload: zoom,
})

export const getSelectedStLocations = st => dispatch => {
  if(st != null) {
    axios.get('/api/states/locations/' + st)
      .then(resp => {
        const locations = resp.data;
        dispatch(setSelectedStLocations(locations))
      })
      .catch(error => console.log(error));
  }
  else {
    dispatch(setSelectedStLocations([]))
  }
}

export const setSelectedStMap = selectedSt => dispatch => {
  dispatch(setSelectedSt(selectedSt))

  axios.get('/api/states/locations/' + selectedSt)
    .then(resp => {
      const locations = resp.data;
      dispatch(setSelectedStLocations(locations))
    })
    .catch(error => console.log(error));
  axios.get('/api/states/sel_st_map/' + selectedSt)
    .then(resp => {
      const center = resp.data;
      dispatch(setMapCenter(center))

      dispatch(setMapZoom(7))
    })
    .catch(error => console.log(error));
}


