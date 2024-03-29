import React from 'react';
import CatalogLikeThis from './catalog-like-this.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';

it(`Components CatalogLikeThis renders correctly`, () => {
  const options = {createNodeMock};
  const props = {
    films: filmsMock
  };
  const tree = renderer
    .create(<Router>
      <CatalogLikeThis {...props}/>
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
