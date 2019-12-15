import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from "./movie-card-full.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCardFull renders correctly`, () => {
  const tree = renderer
    .create(<Router><MovieCardFull film={filmsMock[0]}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
