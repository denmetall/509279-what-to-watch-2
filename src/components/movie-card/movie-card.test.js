import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from "./movie-card.jsx";
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer";

it(`Components MovieCard renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const options = {createNodeMock};
  const props = {
    promoMovie: {
      backgroundImage: ``,
      name: ``,
      posterImage: ``
    }
  };
  const tree = renderer
    .create(<Provider store={store}><Router><MovieCard {...props}/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
