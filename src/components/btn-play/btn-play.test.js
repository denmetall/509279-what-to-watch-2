import React from 'react';
import BtnPlay from './btn-play.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components BtnPlay renders correctly`, () => {
  const tree = renderer
    .create(<Router><BtnPlay
      filmId={0}
      history={{}}
    /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
