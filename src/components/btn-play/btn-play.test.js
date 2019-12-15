import React from 'react';
import BtnPlay from './btn-play.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import filmsMock from "../../mocks/films";

it(`Components BtnPlay renders correctly`, () => {
  const props = {
    filmId: filmsMock[0].id,
    history: {}
  };
  const tree = renderer
    .create(<Router><BtnPlay {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
