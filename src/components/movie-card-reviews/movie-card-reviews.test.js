import React from 'react';
import {MovieCardReviews} from './movie-card-reviews.jsx';
import renderer from 'react-test-renderer';
import filmsMock from "../../mocks/films";

it(`Components MovieCardReviews renders correctly`, () => {
  const props = {
    filmId: filmsMock[0].id,
    reviews: [
      {
        comment: ``,
        date: ``,
        rating: null,
        user: {
          name: ``
        },
        id: 1
      }
    ]
  };
  const tree = renderer
    .create(<MovieCardReviews {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
