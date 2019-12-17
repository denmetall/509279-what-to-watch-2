import React from 'react';
import {connect} from 'react-redux';
import Footer from '../footer/footer.jsx';
import {getFavoritesFilms} from "../../selectors";
import withActiveItem from "../../hocs/with-active-item";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import PropTypes from 'prop-types';
import {MovieType} from "../../utils";

const MovieCardsListWrapped = withActiveItem(MovieCardsList);

const MyList = (props) => {
  const {films} = props;

  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieCardsListWrapped films={films}/>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    films: getFavoritesFilms(state)
  };
};

MyList.defaultProps = {
  films: []
};

MyList.propTypes = {
  films: PropTypes.arrayOf(MovieType)
};

export {MyList};
export default connect(mapStateToProps)(MyList);


