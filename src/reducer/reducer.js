import {combineReducers} from 'redux';

import {reducer as genre} from './genre/genre';
import {reducer as films} from './films/films';
import {reducer as authorization} from './authorization/authorization';
import {reducer as reviews} from './reviews/reviews';
import {reducer as favorites} from './favorites/favorites';

export default combineReducers(
    {
      genre,
      films,
      authorization,
      reviews,
      favorites
    }
);
