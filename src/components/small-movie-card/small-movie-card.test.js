import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from "./small-movie-card.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components SmallMovieCard renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    film: filmsMock[0],
    onMouseOverCard: jest.fn(),
    onMouseOutCard: jest.fn(),
    isPlaying: false,
    history: {}
  };
  const tree = renderer
    .create(<Router>
      <SmallMovieCard {...props}/>
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
