import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components App renders correctly`, () => {
  const tree = renderer
    .create(<App films={filmsMock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
