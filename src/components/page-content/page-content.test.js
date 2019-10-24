import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from "./page-content.jsx";
import filmsMock from '../../mocks/films';

it(`Components PageContent renders correctly`, () => {
  const tree = renderer
    .create(<PageContent films={filmsMock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
