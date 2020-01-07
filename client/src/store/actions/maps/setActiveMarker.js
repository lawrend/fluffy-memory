export const SET_ACTIVE_MARKER = "SET_ACTIVE_MARKER";

export const setActiveMarker = marker => ({
  type: SET_ACTIVE_MARKER,
  payload: marker,
})

export const SET_MARKERS = "SET_MARKERS";

export const setMarkers = markers => ({
  type: SET_MARKERS,
  payload: markers,
})
