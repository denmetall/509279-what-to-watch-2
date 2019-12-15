import React from 'react';
import {MovieCardButtons} from './movie-card-buttons.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCardButtons renders correctly`, () => {
  const props = {
    movieCardFool: false,
    isAuthorizationRequired: false,
    movie: filmsMock[0]
  };
  const tree = renderer
    .create(<Router><MovieCardButtons {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
