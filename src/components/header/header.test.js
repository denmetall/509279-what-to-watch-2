import React from 'react';
import Header from './header.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components Header renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router><Header/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
