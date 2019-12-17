import React from 'react';
import {Catalog} from './catalog.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import filmsMock from "../../mocks/films";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components BtnPlay renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const options = {createNodeMock};
  const props = {
    genre: ``,
    films: filmsMock,
    moviesCounter: 0,
    onChangeFilter: () => {},
    onShowMoreClick: () => {}
  };

  const tree = renderer
    .create(<Provider store={store}><Router><Catalog {...props}/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
