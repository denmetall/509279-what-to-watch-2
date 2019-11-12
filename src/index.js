import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app.jsx";
import filmsListMock from './mocks/films';
import {reducer} from './reducer';
import {HashRouter as Router} from 'react-router-dom';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <Router>
      <App films={filmsListMock}/>
    </Router>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
