import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import filmsMock from '../../mocks/films';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components VideoPlayer renders correctly`, () => {
  const props = {
    poster: filmsMock[0].previewImage,
    src: filmsMock[0].previewVideoLink,
    isPlaying: false
  };
  const options = {createNodeMock};
  const tree = renderer
    .create(<VideoPlayer {...props}/>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
