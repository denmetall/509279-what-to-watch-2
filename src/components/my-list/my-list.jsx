import React from 'react';
import {connect} from 'react-redux';

import Footer from '../footer/footer.jsx';
import {getFilms, getFilteredFilms, getGenre} from "../../selectors";
import withActiveItem from "../../hocs/with-active-item";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";

const MovieCardsListWrapped = withActiveItem(MovieCardsList);

const MyList = (props) => {
  const {movies} = props;
  // Сюда передеается пустой массив
  console.log(movies);

  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieCardsListWrapped films={movies}/>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  // Не срабатывает mapStateToProps, не моуг понять почему
  debugger;
  return {
    movies: getFilteredFilms(state)
  };
};

MyList.defaultProps = {
  movies: []
};

export {MyList};

export default connect(mapStateToProps)(MyList);
