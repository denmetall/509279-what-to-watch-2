import React from 'react';
import {withRouter} from 'react-router-dom';

const BtnList = (props) => {
  const {history} = props;

  const onClickHandler = () => {
    history.push(`/my-list`);
  };

  return <button
    className="btn btn--list movie-card__button"
    type="button"
    onClick={onClickHandler}
  >
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
    <span>My list</span>
  </button>;
};

export default withRouter(BtnList);
