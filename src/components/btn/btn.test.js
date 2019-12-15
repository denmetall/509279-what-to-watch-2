import React from 'react';
import Btn from './btn.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components Btn renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <Btn movieId={filmsMock[0].id}/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
