const initialState = {
  selected_location_species: [],
  selectedSt: "None",
  selectedProtectedArea: [],
  selectedStLocations: [],
  selectedStSpecies: [],
  locations: [],
  stnames: [],
};

export default function manageLocation (state = initialState, action) {
  switch (action.type) {
    // case 'SET_SELECTED_LOCATION_SPECIES':
    //   return {...state, selected_location_species: action.payload}
    case 'SET_STNAMES':
      return {...state, stnames: action.payload}
    case 'SET_SELECTED_ST':
      return {...state, selectedSt: action.payload}
    case 'RESET_SELECTED_ST':
      return {...state, selectedSt: "None"}
    case 'SET_SELECTED_ST_LOCATIONS':
      return {...state, selectedStLocations: action.payload}
    case 'SET_LOCATIONS':
      return {...state, locations: action.payload}
    case 'SET_SELECTED_PROTECTED_AREA':
      return {...state, selectedProtectedArea: action.payload}
    default:
      return state
  }
}
