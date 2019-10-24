import React, {Component} from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from 'prop-types';

class MovieCardsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.id} film={film} onClickTitleHandler={() => {}} onMouseOverCard={() => {}}/>)}
    </div>;
  }
}

MovieCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieCardsList;
