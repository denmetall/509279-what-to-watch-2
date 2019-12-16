import React from 'react';
import {MyList} from './my-list.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MyList renders correctly`, () => {
  const props = {
    films: filmsMock
  };

  const tree = renderer
    .create(<Router><MyList {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
