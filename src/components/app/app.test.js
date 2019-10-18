import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`Components App renders correctly`, () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
