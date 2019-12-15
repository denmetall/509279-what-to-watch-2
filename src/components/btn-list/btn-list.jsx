import React from 'react';
import PropTypes from 'prop-types';

const BtnList = (props) => {
  const {film, onClick, isLoading, onPost} = props;
  const {isFavorite} = film;

  const onClickHandler = () => {
    if (!isLoading) {
      const state = isFavorite ? 0 : 1;

      onPost(`/favorite/${film.id}/${state}`, {}, (data) => {
        if (typeof onClick === `function`) {
          onClick(data);
        }
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
  film: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
};

export default BtnList;
