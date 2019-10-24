import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardsList from "./movie-cards-list.jsx";

it(`Components MovieCardsList renders correctly`, () => {
  const tree = renderer
    .create(<MovieCardsList films={[{}, {}, {}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
