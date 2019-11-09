import React from 'react';
import PropTypes from 'prop-types';
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";

const PageContent = (props) => {
  const {films, onClickTitleHandler} = props;

  return <div className="page-content">
    <Catalog
      films={films}
      onClickTitleHandler={onClickTitleHandler}
    />
    <Footer/>
  </div>;
};

PageContent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitleHandler: PropTypes.func.isRequired
};

export default PageContent;
