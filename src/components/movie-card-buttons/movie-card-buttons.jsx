import React, {PureComponent} from 'react';
import BtnPlay from "../btn-play/btn-play.jsx";
import BtnList from "../btn-list/btn-list.jsx";
import Btn from "../btn/btn.jsx";
import PropTypes from "prop-types";

class MovieCardButtons extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieCardFool} = this.props;

    return <div className="movie-card__buttons">
      <BtnPlay/>
      <BtnList/>
      {movieCardFool && <Btn/>}
    </div>;
  }
}

MovieCardButtons.propTypes = {
  movieCardFool: PropTypes.bool
};

export default MovieCardButtons;
