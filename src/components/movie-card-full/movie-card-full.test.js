import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from "./movie-card-full.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {reducer} from '../../reducer/authorization/authorization';
import {Provider} from 'react-redux';
import createNodeMock from "../../mocks/create-node-mock";

it(`Components MovieCardFull renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><Router><MovieCardFull film={filmsMock[0]}/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
