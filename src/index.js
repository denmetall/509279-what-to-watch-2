import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import filmsListMock from './mocks/films';
import {HashRouter as Router} from 'react-router-dom';

const init = () => {
  ReactDOM.render(
      <Router>
        <App films={filmsListMock}/>
      </Router>,
      document.querySelector(`#root`)
  );
};

init();
