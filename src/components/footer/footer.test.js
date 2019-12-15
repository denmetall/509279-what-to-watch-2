import React from 'react';
import Footer from './footer.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components Footer renders correctly`, () => {
  const tree = renderer
    .create(<Router><Footer/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
