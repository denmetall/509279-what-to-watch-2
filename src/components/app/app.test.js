import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import filmsMock from '../../mocks/films';

it(`Components App renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    films: filmsMock
  };

  const tree = renderer
    .create(<Router><App {...props}/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
