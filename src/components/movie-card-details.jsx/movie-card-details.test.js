import React from 'react';
import MovieCardDetails from './movie-card-details.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MovieCardDetails renders correctly`, () => {
  const props = {
    film: filmsMock[0]
  };

  const tree = renderer
    .create(<MovieCardDetails {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
