import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import moment from "moment/moment";
import 'moment-duration-format';

const MovieCardDetails = (props) => {
  const {film} = props;
  const {director, runTime, genre, released, starring} = film;

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {starring.map((item, index) => <Fragment key={`starring-${index}`}>{item}, <br/></Fragment>)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{
          moment.duration(runTime, `minutes`).format(`h[h] m[m]`, {trim: false})
        }</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{released}</span>
      </p>
    </div>
  </div>;
};

MovieCardDetails.propTypes = {
  film: PropTypes.object
};

export default MovieCardDetails;
