import React from 'react';
import {AddReview} from './add-review.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Components AddReview renders correctly`, () => {
  const props = {
    movie: filmsMock[0],
    comment: ``,
    isCommentValid: true,
    commentErrorMessage: ``,
    rating: 1,
    isRatingValid: true,
    ratingErrorMessage: ``,
    isFormValid: true,
    isShowError: false,
    onShowError: jest.fn(),
    onUserInput: jest.fn(),
    onAddReview: jest.fn(),
    isAuthorizationRequired: false,
    match: {},
    history: {}
  };

  const tree = renderer
    .create(<Router><AddReview {...props}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
