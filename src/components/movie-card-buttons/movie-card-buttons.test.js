import React from 'react';
import {MovieCardButtons} from './movie-card-buttons.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components MovieCardButtons renders correctly`, () => {
  const tree = renderer
    .create(<Router><MovieCardButtons movieCardFool={true} movie={filmsMock[0]}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
