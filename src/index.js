import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import filmsListMock from './mocks/films';

const init = () => {
  ReactDOM.render(
      <App films={filmsListMock}/>,
      document.querySelector(`#root`)
  );
};

init();
