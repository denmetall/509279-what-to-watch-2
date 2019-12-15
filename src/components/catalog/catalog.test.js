import React from 'react';
import {Catalog} from './catalog.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import filmsMock from "../../mocks/films";

it(`Components BtnPlay renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    genre: ``,
    films: filmsMock,
    moviesCounter: 0,
    onChangeFilter: () => {},
    onShowMoreClick: () => {}
  };

  const tree = renderer
    .create(<Router><Catalog {...props}/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
