// RECEIVES ACTIONS, UPDATES STORE: sets initial state which is an object
const initialState = { species: [],
  center: {lat: 36.8097343, lng: -91.5556199},
  selected_location_species: [],
  locations: [],
  stnames: [],
  stspecies: []
};

// exports function which sets initial state and takes in the action passed and uses switch to determine the action to perform
// it then creates a new object to replace the current state, only changing what the action tells it to.
// Object assign not usually used anymore
export default function manageSpecies (state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_LOCATION_SPECIES':
      return {...state, selected_location_species: action.payload}
    case 'SET_MAP_CENTER':
      return {...state, center: action.payload}
    case 'SET_STSPECIES':
      return {...state, stspecies: action.payload}
    case 'SET_SPECIES':
      return {...state, species: action.payload}
    default:
      return state
  }
}
