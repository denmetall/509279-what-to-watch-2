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
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        const reviews = response.data;
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
  addReview: (rating, comment, movieId) => (dispatch, _, api) => {
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then((response) => {
        const reviews = response.data;
        dispatch(ActionCreator.loadReviews(reviews));
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
