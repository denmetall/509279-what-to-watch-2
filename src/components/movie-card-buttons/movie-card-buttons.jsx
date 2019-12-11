import React, {PureComponent} from 'react';
import BtnPlay from "../btn-play/btn-play.jsx";
import BtnList from "../btn-list/btn-list.jsx";
import Btn from "../btn/btn.jsx";
import PropTypes from "prop-types";
import {getAuthorizationRequired} from "../../selectors";
import connect from "react-redux/es/connect/connect";

class MovieCardButtons extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieCardFool, isAuthorizationRequired, movieId} = this.props;

    return <div className="movie-card__buttons">
      <BtnPlay/>
      <BtnList/>
      {movieCardFool && isAuthorizationRequired && <Btn movieId={movieId}/>}
    </div>;
  }
}

MovieCardButtons.propTypes = {
  movieCardFool: PropTypes.bool,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationRequired(state)
  };
};

export {MovieCardButtons};
export default connect(mapStateToProps)(MovieCardButtons);
