import React from 'react';
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {onClickBtn} = props;
  return <button
    className="catalog__button"
    type="button"
    onClick={onClickBtn}
  >Show more</button>;
};

ShowMore.propTypes = {
  onClickBtn: PropTypes.func,
};

export default ShowMore;
