import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import thunk from "redux-thunk";
import {compose} from "recompose";
import createAPI from './api/api';

import App from "./components/app/app.jsx";
import reducer from './reducer/reducer';
import {Operation} from './reducer/films/films';
import {Operation as OperationAuth, ActionCreator as ActionCreatorAuth} from './reducer/authorization/authorization';
import {Operation as OperationFavorites} from './reducer/favorites/favorites';
import {BrowserRouter as Router} from 'react-router-dom';
import history from './history';

const init = () => {
  const api = createAPI(() => store.dispatch(ActionCreatorAuth.requireAuthorization(false)));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(OperationAuth.checkAuth());
  store.dispatch(Operation.getFilms());
  store.dispatch(OperationFavorites.loadFavorites());
  store.dispatch(Operation.getPromoMovie());

  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
