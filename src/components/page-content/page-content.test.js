import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from "./page-content.jsx";

it(`Components PageContent renders correctly`, () => {
  const tree = renderer
    .create(<PageContent films={[{}, {}, {}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
