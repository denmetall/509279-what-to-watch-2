import React from 'react';
import {MyList} from './my-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';

it(`Components MyList renders correctly`, () => {
  const props = {
    films: filmsMock
  };

  const tree = renderer
    .create(<MyList {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
