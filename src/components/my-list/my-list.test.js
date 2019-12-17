import React from 'react';
import {MyList} from './my-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components MyList renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const options = {createNodeMock};
  const props = {
    films: filmsMock
  };

  const tree = renderer
    .create(<Provider store={store}><Router><MyList {...props}/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
