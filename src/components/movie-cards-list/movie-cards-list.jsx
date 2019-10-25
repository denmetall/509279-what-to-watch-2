import React, {Component} from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from 'prop-types';

class MovieCardsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSmallMovieCard: null
    };
  }

  render() {
    const {films, onClickTitleHandler} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film) => {
        return <SmallMovieCard
          key={film.id}
          film={film}
          onClickTitleHandler={onClickTitleHandler}
          onMouseOverCard={this._hundlerMouseOverCard.bind(this)}
        />;
      })}
    </div>;
  }

  _hundlerMouseOverCard(film) {
    this.setState({
      activeSmallMovieCard: film.id
    });
  }
}

MovieCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitleHandler: PropTypes.func.isRequired
};

export default MovieCardsList;
