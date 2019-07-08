import axios from 'axios';
import { setSelectedStMap, setMapCenter, setMapZoom } from '../maps/getMap.js'

//set Selected State of the U.S. from dropdown
//or resets selected state to "None"
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

// set all protected areas for the selected state
export const SET_SELECTED_ST_LOCATIONS = "SET_SELECTED_ST_LOCATIONS";
export const setSelectedStLocations = selectedStLocations => ({
  type: SET_SELECTED_ST_LOCATIONS,
  payload: selectedStLocations,
})

// generic set center and zoom of the map - should be elsewhere

// export const SET_MAP_CENTER = "SET_MAP_CENTER";
// export const setMapCenter = center => ({
//   type: SET_MAP_CENTER,
//   payload: center,
// })
// export const SET_MAP_ZOOM = "SET_MAP_ZOOM";
// export const setMapZoom = zoom => ({
//   type: SET_MAP_ZOOM,
//   payload: zoom,
// })

// pull and set all protected areas for selected state
export const getSelectedStLocations = st => dispatch => {
  if(st !== null && st !== "None") {
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

//set map for selected state
// export const setSelectedStMap = selectedSt => dispatch => {
//   dispatch(setSelectedSt(selectedSt))

//   axios.get('/api/states/locations/' + selectedSt)
//     .then(resp => {
//       const locations = resp.data;
//       dispatch(setSelectedStLocations(locations))
//     })
//     .catch(error => console.log(error));
//   axios.get('/api/states/sel_st_map/' + selectedSt)
//     .then(resp => {
//       const center = resp.data;
//       dispatch(setMapCenter(center))

//       dispatch(setMapZoom(7))
//     })
//     .catch(error => console.log(error));
// }


