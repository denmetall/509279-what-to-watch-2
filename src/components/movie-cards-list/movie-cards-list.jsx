import React, {Component} from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from 'prop-types';

class MovieCardsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null,
      isPlaying: false
    };

    this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
    this._handlerMouseOutCard = this._handlerMouseOutCard.bind(this);
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film) => {
        return <SmallMovieCard
          key={film.id}
          film={film}
          onMouseOverCard={this._handlerMouseOverCard}
          onMouseOutCard={this._handlerMouseOutCard}
          isPlaying={film.id === this.state.activeMovieId && this.state.isPlaying}
        />;
      })}
    </div>;
  }

  _handlerMouseOverCard(film) {
    this.setState({
      activeMovieId: film.id,
      isPlaying: true
    });
  }

  _handlerMouseOutCard() {
    this.setState({
      activeMovieId: null,
      isPlaying: false
    });
  }
}

MovieCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieCardsList;
