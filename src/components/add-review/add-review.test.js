import React from 'react';
import {AddReview} from './add-review.jsx';
import renderer from 'react-test-renderer';

it(`Components AddReview renders correctly`, () => {
  const tree = renderer
    .create(<AddReview
      comment={``}
      isCommentValid={true}
      commentErrorMessage={``}
      rating={1}
      isRatingValid={true}
      ratingErrorMessage={``}
      isFormValid={true}
      isShowError={false}
      onShowError={jest.fn()}
      onUserInput={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
