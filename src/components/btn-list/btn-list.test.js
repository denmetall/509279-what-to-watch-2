import React from 'react';
import BtnList from './btn-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components BtnList renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const props = {
    film: filmsMock[0],
    onLoadFilms: jest.fn(),
    isLoading: jest.fn(),
    onPost: jest.fn()
  };
  const tree = renderer
    .create(<Provider store={store}><BtnList {...props}/></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
