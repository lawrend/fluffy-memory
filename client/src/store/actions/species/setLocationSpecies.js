import axios from 'axios';

export const SET_SELECTED_LOCATION_SPECIES = "SET_SELECTED_LOCATION_SPECIES";
const setSelectedStSpecies = locationSpecies => ({
  type:SET_SELECTED_LOCATION_SPECIES,
  payload: locationSpecies,
})

export const getSelectedStSpecies = st => dispatch => {
  axios.get('/api/states/species/' + st)
    .then(resp => {
      const species = resp.data;
      console.log("sepecies: ", species)
      dispatch (setSelectedStSpecies(species))
    })
    .catch(error => console.log(error));
}
