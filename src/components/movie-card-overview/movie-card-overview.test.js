import React from 'react';
import MovieCardOverview from './movie-card-overview.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardOverview renders correctly`, () => {
  const props = {
    film: filmsMock[0]
  };
  const tree = renderer
    .create(<MovieCardOverview {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
