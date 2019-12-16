import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/genre/genre";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films";
import {MOVIES_COUNT_STEP, MovieType} from "../../utils";
import withActiveItem from "../../hocs/with-active-item";
import {getFilteredFilms, getGenre, getMoviesCounter} from "../../selectors";

const MovieCardsListWrapped = withActiveItem(MovieCardsList);

class Catalog extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genre, onChangeFilter, moviesCounter, onShowMoreClick} = this.props;
    const isShowBtn = moviesCounter < films.length;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList activeFilter={genre} onChangeFilter={onChangeFilter}/>

      <MovieCardsListWrapped films={films.slice(0, moviesCounter)}/>

      {isShowBtn && <div className="catalog__more">
        <ShowMore onClickBtn={() => onShowMoreClick(MOVIES_COUNT_STEP)}/>
      </div>}

    </section>;
  }
}

Catalog.defaultProps = {
  films: [],
  genre: ``,
  moviesCounter: 0,
  onChangeFilter: () => {},
  onShowMoreClick: () => {}
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(MovieType),
  genre: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  moviesCounter: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    genre: getGenre(state),
    films: getFilteredFilms(state),
    moviesCounter: getMoviesCounter(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(ActionCreator.setGenreFilter(genre));
    },
    onShowMoreClick: (count) => {
      dispatch(ActionCreatorFilms.increaseMoviesCounter(count));
    }
  };
};

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
