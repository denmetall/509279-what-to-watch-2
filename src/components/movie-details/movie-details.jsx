import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import Footer from "../footer/footer.jsx";
import CatalogLikeThis from "../catalog-like-this/catalog-like-this.jsx";

const MovieDetails = (props) => {
  const {film, films} = props;

  return <Fragment>
    <MovieCardFull film={film}/>

    <div className="page-content">
      <CatalogLikeThis
        films={films}
      />
      <Footer/>
    </div>
  </Fragment>;
};

MovieDetails.propTypes = {
  film: PropTypes.object,
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieDetails;
