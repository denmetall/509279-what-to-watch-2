import {reducer, ActionType} from "./network-failed";

const initialState = false;

describe(`network-failed reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SHOW_ERROR`, () => {
    const action = {
      type: ActionType.SHOW_ERROR,
      payload: 404,
    };

    expect(reducer(initialState, action)).toEqual(404);
  });
});
