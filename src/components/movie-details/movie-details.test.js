import React from 'react';
import renderer from 'react-test-renderer';
import {MovieDetails} from "./movie-details.jsx";
import filmsMock from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components MovieDetails renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router>
      <MovieDetails
        filmId={filmsMock[0].id}
      />
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
