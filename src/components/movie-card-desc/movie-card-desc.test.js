import React from 'react';
import MovieCardDesc from './movie-card-desc.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardDesc renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardDesc film={filmsMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
