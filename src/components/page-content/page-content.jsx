import React from 'react';
import PropTypes from 'prop-types';
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";

const PageContent = (props) => {
  const {films} = props;

  return <div className="page-content">
    <Catalog
      films={films}
    />
    <Footer/>
  </div>;
};

PageContent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PageContent;
