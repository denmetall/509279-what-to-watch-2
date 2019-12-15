import React from 'react';
import {UserBlock} from './user-block.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {reducer} from '../../reducer/authorization/authorization';
import {Provider} from 'react-redux';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components UserBlock renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><Router><UserBlock/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
