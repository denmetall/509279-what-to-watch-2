import React from 'react';
import PropTypes from 'prop-types';
import {MovieType} from "../../utils";
import {connect} from "react-redux";
import {Operation as OperationFilms} from '../../reducer/films/films';
import {Operation as OperationFavorites} from '../../reducer/favorites/favorites';

const BtnList = (props) => {
  const {film, onLoadFilms, isLoading, onPost} = props;
  const {isFavorite} = film;

  const onClickHandler = () => {
    if (!isLoading) {
      const state = isFavorite ? 0 : 1;

      onPost(`/favorite/${film.id}/${state}`, {}, () => {
        onLoadFilms();
      });
    }
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onClickHandler}
    >
      {!isFavorite && <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>}
      {isFavorite && <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>}
      <span>My list</span>
    </button>
  );
};

BtnList.propTypes = {
  film: MovieType,
  onLoadFilms: PropTypes.func,
  isLoading: PropTypes.func,
  onPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => {
    dispatch(OperationFilms.getFilms());
    dispatch(OperationFilms.getPromoMovie());
    dispatch(OperationFavorites.loadFavorites());
  }
});

export {BtnList};

export default connect(null, mapDispatchToProps)(BtnList);
