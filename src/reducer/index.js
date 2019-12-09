import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as films} from './films/films';
import {reducer as authorization} from './authorization/authorization';

export default combineReducers(
    {
      genre,
      films,
      authorization
    }
);
