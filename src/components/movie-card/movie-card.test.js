import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from "./movie-card.jsx";
import {BrowserRouter as Router} from 'react-router-dom';
import {reducer} from '../../reducer/authorization/authorization';
import {Provider} from 'react-redux';
import createNodeMock from "../../mocks/create-node-mock";
import {createStore} from "redux";

it(`Components MovieCard renders correctly`, () => {
  const options = {createNodeMock};
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><Router><MovieCard/></Router></Provider>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
