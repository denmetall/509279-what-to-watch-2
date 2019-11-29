import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as films} from './films/films';

export default combineReducers(
    {
      genre,
      films
    }
);
