import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from "./movie-card.jsx";
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components MovieCard renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    promoMovie: {
      backgroundImage: ``,
      name: ``,
      posterImage: ``
    }
  };
  const tree = renderer
    .create(<Router><MovieCard {...props}/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
