import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operations
} from './reviews';

import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../api/api';

const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews([{review: `name`}])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [{review: `name`}],
    });
  });
  it(`Action creator for add review returns correct action`, () => {
    expect(ActionCreator.addReview([{review: `name`}])).toEqual({
      type: ActionType.ADD_REVIEW,
      payload: [{review: `name`}],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change reviews by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_REVIEWS,
      payload: [{review: `name`}],
    })).toEqual([{review: `name`}]);
  });
});

describe(`Operations works correctly`, () => {
  it(`load reviews should make a correct api call to /comments/:movieId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadReviews = Operations.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return loadReviews(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}]
        });
      });
  });
});
