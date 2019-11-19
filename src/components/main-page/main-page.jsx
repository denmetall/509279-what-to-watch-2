import React, {Fragment} from 'react';
import MovieCard from "../movie-card/movie-card.jsx";
import Catalog from "../catalog/catalog.jsx";
import Footer from "../footer/footer.jsx";

const MainPage = () => {
  return <Fragment>
    <MovieCard/>
    <div className="page-content">
      <Catalog />
      <Footer />
    </div>;
  </Fragment>;
};

export default MainPage;
