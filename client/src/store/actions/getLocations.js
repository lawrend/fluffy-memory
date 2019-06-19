import axios from 'axios';

export const SET_LOCATIONS = "SET_LOCATIONS";

const setLocations = locations => ({
  type: SET_LOCATIONS,
  payload: locations,
})

export const SET_STNAMES = "SET_STNAMES";

const setStnames = stnames => ({
  type: SET_STNAMES,
  payload: stnames,
})

export const getLocations = dispatch => {
  axios.get('/api/locations')
    .then(resp => {
      const locations = resp.data;
      dispatch(setLocations(locations))
    })
    .catch(error => console.log(error));

  axios.get('/api/states/locationsdropdown')
    .then(resp => {
      console.log("api locationsbystate resp: ", resp.data)
      const stnames = resp.data;
      dispatch(setStnames(stnames))
    })
    .catch(error => console.log(error));

}


