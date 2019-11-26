import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import thunk from "redux-thunk";
import {compose} from "recompose";
import createAPI from './api/api';

import App from "./components/app/app.jsx";
import {reducer, Operation} from './reducer';
import {HashRouter as Router} from 'react-router-dom';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.getFilms());

  ReactDOM.render(<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
