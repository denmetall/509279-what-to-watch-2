import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";

it(`Components SmallMovieCard renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard movieTitle={`some title`} onClickTitleHandler={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
