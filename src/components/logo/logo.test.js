import React from 'react';
import Logo from './logo.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components Logo renders correctly`, () => {
  const tree = renderer
    .create(<Router><Logo/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
