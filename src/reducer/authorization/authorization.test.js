import {reducer, ActionType} from "./authorization";

const initialState = {
  isAuthorizationRequired: false,
  userData: {}
};

const user = {
  "id": 1,
  "avatar_url": `/wtw/static/avatar/6.jpg`,
  "email": `denis@yandex.ru`,
  "name": `Denis`,
};

describe(`authorization reducer works correctly`, () => {
  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SET_USER`, () => {
    const action = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          userData: user,
        }));
  });

  it(`RESET_USER`, () => {
    const action = {
      type: ActionType.RESET_USER,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          userData: initialState.userData,
        }));
  });

  it(`REQUIRE_AUTHORIZATION`, () => {
    const action = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          isAuthorizationRequired: true,
        }));
  });
});
