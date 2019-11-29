import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/genre/genre";
import {MOVIES_COUNT_DEFAULT, MOVIES_COUNT_STEP, DEFAULT_FILTER} from "../../utils";
import withActiveItem from "../../hocs/with-active-item";

const MovieCardsListWrapped = withActiveItem(MovieCardsList);

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      moviesCounter: MOVIES_COUNT_DEFAULT
    };

    this._onShowMoreClick = this._onShowMoreClick.bind(this);
  }

  render() {
    const {films, genre, onChangeFilter} = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList activeFilter={genre} onChangeFilter={onChangeFilter}/>

      <MovieCardsListWrapped films={films.slice(0, this.state.moviesCounter)}/>

      <div className="catalog__more">
        <ShowMore onClickBtn={this._onShowMoreClick}/>
      </div>
    </section>;
  }

  _onShowMoreClick() {
    this.setState((prevState) => ({
      moviesCounter: prevState.moviesCounter + MOVIES_COUNT_STEP
    }));
  }
}

Catalog.defaultProps = {
  films: [],
  genre: ``
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  // На первом останове нормальный стейт
  // После получения списка фильмов след. структура films: {films: Array(25)}
  debugger;
  return {
    genre: state.genre,
    films: state.films.filter((movie) => {
      if (state.genre === DEFAULT_FILTER) {
        return true;
      } else {
        return movie.genre === state.genre;
      }
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(ActionCreator.setGenreFilter(genre));
    }
  };
};

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
