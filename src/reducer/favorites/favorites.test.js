import {
  ActionCreator,
  ActionType,
  initialState,
  reducerForTest,
  Operation
} from './favorites';

import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../api/api';

const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites([{favorite: `name`}])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [{favorite: `name`}],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducerForTest(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change favorites by a given value`, () => {
    expect(reducerForTest(initialState, {
      type: ActionType.LOAD_FAVORITES,
      payload: [{favorites: `name`}],
    })).toEqual([{favorites: `name`}]);
  });
});

describe(`Operation works correctly`, () => {
  it(`load favorites should make a correct api call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavorites = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return loadFavorites(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}]
        });
      });
  });
});
