import React from 'react';
import renderer from 'react-test-renderer';
import {MovieDetails} from "./movie-details.jsx";
import filmsMock from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {reducer} from '../../reducer/authorization/authorization';
import {Provider} from 'react-redux';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components MovieDetails renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><Router>
      <MovieDetails
        filmId={filmsMock[0].id}
      />
    </Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
