import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import createNodeMock from '../../mocks/create-node-mock';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components MainPage renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const options = {createNodeMock};

  const tree = renderer
    .create(<Provider store={store}><Router><MainPage/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
