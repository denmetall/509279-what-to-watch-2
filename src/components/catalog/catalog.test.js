import React from 'react';
import {Catalog} from './catalog.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import {createStore} from 'redux';
import {reducer} from '../../reducer/films/films';
import {Provider} from 'react-redux';

it(`Components BtnPlay renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <Catalog/>
      </Router>
    </Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
