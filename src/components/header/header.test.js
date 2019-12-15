import React from 'react';
import Header from './header.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components Header renders correctly`, () => {
  const tree = renderer
    .create(<Router><Header/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
