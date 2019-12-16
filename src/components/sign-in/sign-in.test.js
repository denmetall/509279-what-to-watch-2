import React from 'react';
import {SignIn} from './sign-in.jsx';
import renderer from 'react-test-renderer';

it(`Components SignIn renders correctly`, () => {
  const props = {
    onEmailInput: () => {},
    onPasswordInput: () => {},
    onSubmit: () => {}
  };

  const tree = renderer
    .create(<SignIn {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
