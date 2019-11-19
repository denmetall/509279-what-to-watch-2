import React from 'react';
import {Catalog} from './catalog.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {HashRouter as Router} from 'react-router-dom';
import createNodeMock from '../../mocks/create-node-mock';
import {DEFAULT_FILTER} from "../../utils";

it(`Components BtnPlay renders correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Router>
      <Catalog
        films={filmsMock}
        filmsSort={filmsMock}
        genre={DEFAULT_FILTER}
        onChangeFilter={jest.fn()}
      />
    </Router>, options)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
