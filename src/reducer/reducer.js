import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as films} from './films/films';
import {reducer as authorization} from './authorization/authorization';
import {reducer as reviews} from './reviews/reviews';
import {reducer as favorites} from './favorites/favorites';
import {reducer as networkFailed} from './network-failed/network-failed';
import {reducer as loadersReducer} from "react-redux-hoc-loader";

export default combineReducers(
    {
      genre,
      films,
      authorization,
      reviews,
      favorites,
      networkFailed,
      loaders: loadersReducer,
    }
);
