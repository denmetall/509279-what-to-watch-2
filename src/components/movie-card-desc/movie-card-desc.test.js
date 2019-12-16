import React from 'react';
import MovieCardDesc from './movie-card-desc.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer";
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCardDesc renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const props = {
    film: filmsMock[0]
  };
  const tree = renderer
    .create(<Provider store={store}><Router><MovieCardDesc {...props}/></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
