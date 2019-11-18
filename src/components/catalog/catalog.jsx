import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";

class Catalog extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genre, onChangeFilter} = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList films={films} activeFilter={genre} onChangeFilter={onChangeFilter}/>

      <MovieCardsList films={films}/>

      <div className="catalog__more">
        <ShowMore/>
      </div>
    </section>;
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
  return {
    films: state.films,
    genre: state.genre
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
