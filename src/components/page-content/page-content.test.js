import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from "./page-content.jsx";
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components PageContent renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <PageContent films={filmsMock} onClickTitleHandler={jest.fn()}/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
