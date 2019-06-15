// COMBINES REDUCERS: imports combineReducers and all reducers to be combined
import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer.js';
import SpeciesReducer from './SpeciesReducer.js';

export const rootReducer = combineReducers({
  locations: LocationReducer,
  species: SpeciesReducer,
}
);


