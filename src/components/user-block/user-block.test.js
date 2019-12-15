import React from 'react';
import {UserBlock} from './user-block.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components UserBlock renders correctly`, () => {
  const tree = renderer
    .create(<Router><UserBlock/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
