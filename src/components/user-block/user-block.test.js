import React from 'react';
import {UserBlock} from './user-block.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components UserBlock renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    isAuthorizationRequired: false,
    userData: {
      avatarUrl: ``
    }
  };
  const tree = renderer
    .create(<Router><UserBlock {...props}/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
