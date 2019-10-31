import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components App renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <App films={filmsMock}/>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
