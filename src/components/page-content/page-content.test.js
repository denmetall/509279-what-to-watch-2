import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from "./page-content.jsx";
import movieTitles from "../../mocks/movie-titles";

it(`Components PageContent renders correctly`, () => {
  const tree = renderer
    .create(<PageContent movieTitles={movieTitles}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
