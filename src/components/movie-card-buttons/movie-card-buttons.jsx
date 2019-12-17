import React, {PureComponent} from 'react';
import BtnPlay from "../btn-play/btn-play.jsx";
import BtnList from "../btn-list/btn-list.jsx";
import Btn from "../btn/btn.jsx";
import PropTypes from "prop-types";
import {getAuthorizationRequired} from "../../selectors";
import {connect} from "react-redux";
import withApi from "../../hocs/with-api/with-api.jsx";
import {MovieType} from "../../utils";

const BtnListWrapped = withApi(BtnList);

class MovieCardButtons extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieCardFool, isAuthorizationRequired, movie} = this.props;
    const {id} = movie;

    return <div className="movie-card__buttons">
      <BtnPlay filmId={id}/>
      {isAuthorizationRequired && <BtnListWrapped film={movie}/>}
      {movieCardFool && isAuthorizationRequired && <Btn movieId={id}/>}
    </div>;
  }
}

MovieCardButtons.propTypes = {
  movieCardFool: PropTypes.bool,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  movie: MovieType
};

MovieCardButtons.defaultProps = {
  isAuthorizationRequired: false
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationRequired(state)
  };
};

export {MovieCardButtons};
export default connect(mapStateToProps)(MovieCardButtons);
