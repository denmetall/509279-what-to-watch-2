import React from 'react';
import MoviePlayer from './movie-player.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MoviePlayer renders correctly`, () => {
  const props = {
    movie: filmsMock[0],
    progress: 1,
    isPlaying: true,
    endTime: ``,
    onPlayButtonClick: () => {},
    renderVideo: () => {},
    onExit: () => {},
    onEnableFullScreen: () => {},
    history: {}
  };

  const tree = renderer
    .create(<Router><MoviePlayer {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
