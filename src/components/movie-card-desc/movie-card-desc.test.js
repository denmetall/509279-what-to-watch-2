import React from 'react';
import MovieCardDesc from './movie-card-desc.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardDesc renders correctly`, () => {
  const props = {
    film: filmsMock[0]
  };
  const tree = renderer
    .create(<MovieCardDesc {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
