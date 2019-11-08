import React from 'react';
import MovieCardButtons from './movie-card-buttons.jsx';
import renderer from 'react-test-renderer';

it(`Components MovieCardButtons renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardButtons movieCardFool={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
