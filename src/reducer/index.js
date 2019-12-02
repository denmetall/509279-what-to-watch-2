import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as films} from './films/films';
import {reducer as isAuthorizationRequired} from './authorization/authorization';

export default combineReducers(
    {
      genre,
      films,
      isAuthorizationRequired
    }
);
