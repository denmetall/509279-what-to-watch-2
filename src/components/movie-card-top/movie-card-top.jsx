import React, {Component} from 'react';
import MovieNav from "../movie-nav/movie-nav.jsx";
import MovieCardDetails from "../movie-card-details.jsx/movie-card-details.jsx";
import MovieCardOverview from "../movie-card-overview/movie-card-overview.jsx";
import MovieCardReviews from "../movie-card-reviews/movie-card-reviews.jsx";
import PropTypes from "prop-types";
import {Tabs} from "../../utils";

class MovieCardTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: Tabs.OVERVIEW
    };

    this._handleChangeTab = this._handleChangeTab.bind(this);
  }

  render() {
    const {film} = this.props;
    const {posterImage} = film;
    const {activeTab} = this.state;

    return <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <MovieNav activeTab={activeTab} onChangeTab={this._handleChangeTab}/>

          {(() => {
            switch (activeTab) {
              case Tabs.OVERVIEW:
                return <MovieCardOverview/>;
              case Tabs.DETAILS:
                return <MovieCardDetails/>;
              case Tabs.REVIEWS:
                return <MovieCardReviews/>;
              default:
                return null;
            }
          })()}

        </div>
      </div>
    </div>;
  }

  _handleChangeTab(tab) {
    this.setState = {
      activeTab: tab
    };
  }
}

MovieCardTop.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCardTop;
