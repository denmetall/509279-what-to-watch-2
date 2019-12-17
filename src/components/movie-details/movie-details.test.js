import React from 'react';
import renderer from 'react-test-renderer';
import {MovieDetails} from "./movie-details.jsx";
import filmsMock from "../../mocks/films";
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components MovieDetails renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const options = {createNodeMock};
  const props = {
    filmId: filmsMock[0].id,
    films: filmsMock
  };

  const tree = renderer
    .create(<Provider store={store}><Router>
      <MovieDetails {...props}/>
    </Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
