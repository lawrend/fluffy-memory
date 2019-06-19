const initialState = { species: [],
  center: {lat: 36.8097343, lng: -91.5556199},
  selected_location_species: [],
  selectedSt: "None",
  locations: [],
  stnames: [],
};

export default function manageLocation (state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_LOCATION_SPECIES':
      return {...state, selected_location_species: action.payload}
    case 'SET_SELECTED_ST':
      return {...state, selectedSt: action.payload}
     case 'SET_SELECTED_ST_LOCATIONS':
      return {...state, selectedLocation: action.payload}
case 'SET_MAP_CENTER':
      return {...state, center: action.payload}
    case 'SET_LOCATIONS':
      return {...state, locations: action.payload}
    case 'SET_SPECIES':
      return {...state, species: action.payload}
    case 'SET_STNAMES':
      return {...state, stnames: action.payload}
    default:
      return state
  }
}
