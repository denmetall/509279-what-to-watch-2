import {reducer, ActionType} from "./genre";
import {DEFAULT_FILTER} from "../../utils";

const initialState = DEFAULT_FILTER;

describe(`genre reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SET_FILTER_GENRE`, () => {
    const action = {
      type: ActionType.SET_FILTER_GENRE,
      payload: `Triller`,
    };

    expect(reducer(initialState, action)).toEqual(`Triller`);
  });
});
