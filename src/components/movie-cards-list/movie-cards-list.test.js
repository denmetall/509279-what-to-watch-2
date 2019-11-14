import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardsList from "./movie-cards-list.jsx";
import filmsMock from '../../mocks/films';
import {HashRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components MovieCardsList renders correctly`, () => {
  const options = {createNodeMock};

  const tree = renderer
    .create(<Router>
      <MovieCardsList films={filmsMock}/>
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
