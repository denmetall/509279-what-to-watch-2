import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from "./movie-card-full.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components MovieCardFull renders correctly`, () => {
  const props = {
    film: filmsMock[0]
  };
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router><MovieCardFull {...props}/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
