import React from 'react';

const BtnList = (props) => {
  const {film, onClick, isLoading, onPost} = props;

  const onClickHandler = () => {
    if (!isLoading) {
      const state = film.isFavorite ? 0 : 1;

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
      {!film.isFavorite && <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>}
      {film.isFavorite && <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>}
      <span>My list</span>
    </button>
  );


  // const {history} = props;
  //
  // const onClickHandler = () => {
  //   history.push(`/my-list`);
  // };
  //
  // return <button
  //   className="btn btn--list movie-card__button"
  //   type="button"
  //   onClick={onClickHandler}
  // >
  //   <svg viewBox="0 0 19 20" width="19" height="20">
  //     <use xlinkHref="#add"></use>
  //   </svg>
  //   <span>My list</span>
  // </button>;
};

export default BtnList;
