import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from "./movie-card.jsx";
import filmsMock from '../../mocks/films';

it(`Components MovieCard renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard promoFilm={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
