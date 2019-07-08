const initialState = { species: [],
  center: {lat: 36.8097343, lng: -71.5556199},
  selected_location_species: [],
  locations: [],
  stnames: [],
  stspecies: []
};

export default function manageMap (state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_LOCATION_SPECIES':
      return {...state, selected_location_species: action.payload}
    case 'SET_STSPECIES':
      return {...state, locations: action.payload}
    case 'SET_SPECIES':
      return {...state, species: action.payload}
    default:
      return state
  }
}
