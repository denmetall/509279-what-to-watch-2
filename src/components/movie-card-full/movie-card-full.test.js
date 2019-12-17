import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from "./movie-card-full.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components MovieCardFull renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const props = {
    film: filmsMock[0]
  };
  const options = {createNodeMock};
  const tree = renderer
    .create(<Provider store={store}><Router><MovieCardFull {...props}/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
