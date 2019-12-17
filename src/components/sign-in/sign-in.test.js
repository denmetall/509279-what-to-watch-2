import React from 'react';
import {SignIn} from './sign-in.jsx';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components SignIn renders correctly`, () => {
  const props = {
    formData: {
      email: ``,
      password: ``,
    },
    onChange: () => {},
    onSubmit: () => {},
    errors: {
      email: ``,
      password: ``,
    },
    isValid: false,
    authorized: false,
    history: {}
  };

  const tree = renderer
    .create(<Router><SignIn {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
