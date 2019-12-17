import {startLoading, stopLoading} from "react-redux-hoc-loader";
import {LoaderName} from "../../utils";

const initialState = [];

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review
  }),
};

const Operations = {
  loadReviews: (movieId) => (dispatch, _, api) => {
    dispatch(startLoading(LoaderName.COMMENTS));
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        const reviews = response.data;
        dispatch(ActionCreator.loadReviews(reviews));
        dispatch(stopLoading(LoaderName.COMMENTS));
      })
      .catch(() => {
        dispatch(stopLoading(LoaderName.COMMENTS));
      });
  },
  addReview: (rating, comment, movieId) => (dispatch, _, api) => {
    dispatch(startLoading(LoaderName.REVIEW));
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then((response) => {
        const reviews = response.data;
        dispatch(ActionCreator.loadReviews(reviews));
        dispatch(stopLoading(LoaderName.REVIEW));
      })
      .catch((error) => {
        dispatch(stopLoading(LoaderName.REVIEW));
        throw new Error(`${error} on add review`);
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return action.payload;
  }

  return state;
};

export {
  reducer,
  Operations,
  ActionCreator,
  ActionType,
  initialState
};
