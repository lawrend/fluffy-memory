const initialState = {
  center: {lat: 36.8097343, lng: -91.5556199},
  zoom: 5,
  activeMarker: {},
};

export default function manageMap (state = initialState, action) {
  switch (action.type) {
    case 'SET_MAP_ZOOM':
      return {...state, zoom: action.payload}
    case 'SET_MAP_CENTER':
      return {...state, center: action.payload}
    case 'SET_ACTIVE_MARKER':
      return {...state, activeMarker: action.payload}
    default:
      return state
  }
}
