import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from "./page-content.jsx";
import filmsMock from '../../mocks/films';
import {HashRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components PageContent renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router>
      <PageContent films={filmsMock}/>
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
