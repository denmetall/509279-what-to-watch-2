import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import filmsMock from '../../mocks/films';

it(`Components VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      poster={filmsMock[0].previewImage}
      src={filmsMock[0].previewVideoLink}
      isPlaying={false}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
