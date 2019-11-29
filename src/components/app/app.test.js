import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';
import {HashRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import {createStore} from 'redux';
import {reducer} from '../../reducer/index';
import {Provider} from 'react-redux';

it(`Components App renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);

  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
