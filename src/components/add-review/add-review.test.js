import React from 'react';
import {AddReview} from './add-review.jsx';
import renderer from 'react-test-renderer';
import filmsMock from '../../mocks/films';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

it(`Components AddReview renders correctly`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

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
    .create(<Provider store={store}><Router><AddReview {...props}/></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
