import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {MOVIES_COUNT_DEFAULT, MOVIES_COUNT_STEP} from "../../utils";

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      moviesCounter: MOVIES_COUNT_DEFAULT
    };

    this._onShowMoreClick = this._onShowMoreClick.bind(this)
  }

  render() {
    const {films, filmsSort, genre, onChangeFilter, onShowMoreClick} = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList films={films} activeFilter={genre} onChangeFilter={onChangeFilter}/>

      <MovieCardsList films={filmsSort.slice(0, this.state.moviesCounter)}/>

      <div className="catalog__more">
        <ShowMore onClick={this._onShowMoreClick}/>
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
  filmsSort: [],
  genre: ``
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmsSort: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    genre: state.genre,
    filmsSort: state.filmsSort
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(ActionCreator.setGenreFilter(genre));
      dispatch(ActionCreator.getMoviesList(genre));
    }
  };
};

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
