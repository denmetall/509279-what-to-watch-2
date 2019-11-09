import React, {Fragment} from 'react';
import PropTypes from "prop-types";

const MovieCardOverview = (props) => {
  const {film} = props;
  const {rating, scoresCount, director} = film;

  return <Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.
        (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.</p>

      <p>Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual
        needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds
        himself the recipient of a priceless painting and the chief suspect in her murder.</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and
        other</strong></p>
    </div>
  </Fragment>;
};

MovieCardOverview.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCardOverview;
