import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from "./movie-card.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCard renders correctly`, () => {
  const tree = renderer
    .create(<Router><MovieCard/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
