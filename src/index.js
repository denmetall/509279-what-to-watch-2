import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app.jsx";
import {Operation} from './reducer/films/films';
import {Operation as OperationAuth} from './reducer/authorization/authorization';
import {Operation as OperationFavorites} from './reducer/favorites/favorites';
import {Router} from 'react-router-dom';
import history from './history';
import {store} from './store';

const init = () => {
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
