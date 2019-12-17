import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from "../video-player/video-player.jsx";
import {withRouter} from 'react-router-dom';
import {MovieType} from "../../utils";

const SmallMovieCard = (props) => {
  const {film, onMouseOverCard, onMouseOutCard, isPlaying, history} = props;
  const {id, name, previewImage, previewVideoLink} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseOver={() => onMouseOverCard(film)}
    onMouseOut={() => onMouseOutCard()}
    onClick={() => history.push(`/film/${id}`)}
  >
    <div className="small-movie-card__image">
      <VideoPlayer
        poster={previewImage}
        src={previewVideoLink}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`/film/${id}`} className="small-movie-card__link">{name}</Link>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: MovieType,
  onMouseOverCard: PropTypes.func.isRequired,
  onMouseOutCard: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(SmallMovieCard);
