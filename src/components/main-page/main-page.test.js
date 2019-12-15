import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import createNodeMock from '../../mocks/create-node-mock';

it(`Components MainPage renders correctly`, () => {
  const options = {createNodeMock};

  const tree = renderer
    .create(<Router><MainPage/></Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
