import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";
import filmsMock from '../../mocks/films';
import {HashRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components SmallMovieCard renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router>
      <SmallMovieCard
        film={filmsMock[0]}
        onClickTitleHandler={jest.fn()}
        onMouseOverCard={jest.fn()}
        onMouseOutCard={jest.fn()}
        isPlaying={false}
      />
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
