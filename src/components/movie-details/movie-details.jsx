import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import Footer from "../footer/footer.jsx";
import CatalogLikeThis from "../catalog-like-this/catalog-like-this.jsx";

const MovieDetails = (props) => {
  const {film, films, onClickTitleHandler} = props;

  return <Fragment>
    <MovieCardFull film={film}/>

    <div className="page-content">
      <CatalogLikeThis
        films={films}
        onClickTitleHandler={onClickTitleHandler}
      />
      <Footer/>
    </div>
  </Fragment>;
};

MovieDetails.propTypes = {
  film: PropTypes.object
};

export default MovieDetails;
