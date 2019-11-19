import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page.jsx";
import {createStore} from 'redux';
import {reducer} from '../../reducer';
import {Provider} from 'react-redux';
import {HashRouter as Router} from "react-router-dom";
import createNodeMock from '../../mocks/create-node-mock';

it(`Components MainPage renders correctly`, () => {
  const store = createStore(reducer);
  const options = {createNodeMock};

  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <MainPage/>
      </Router>
    </Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
