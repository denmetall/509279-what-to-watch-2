import {getAdaptedMovies} from "../../api/adapter";
import {startLoading, stopLoading} from "react-redux-hoc-loader";
import {LoaderName} from "../../utils";

const initialState = [];

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  })
};

const Operation = {
  loadFavorites: () => (dispatch, _, api) => {
    dispatch(startLoading(LoaderName.FAVORITE));

    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
        dispatch(stopLoading(LoaderName.FAVORITE));
      })
      .catch(() => {
        dispatch(stopLoading(LoaderName.FAVORITE));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return getAdaptedMovies(action.payload);
  }

  return state;
};

export {
  initialState,
  ActionType,
  ActionCreator,
  Operation,
  reducer
};
