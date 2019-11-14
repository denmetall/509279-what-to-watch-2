import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import GenresList from "../genres-list/genres-list.jsx";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {DEFAULT_FILTER} from "../../utils";

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: DEFAULT_FILTER
    };
  }

  render() {
    const {films} = this.props;

    return <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList films={films} activeFilter={this.state.activeFilter}/>

      <MovieCardsList films={films}/>

      <div className="catalog__more">
        <ShowMore/>
      </div>
    </section>;
  }
}

Catalog.defaultProps = {
  films: []
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return {films: state.films};
};

export default connect(mapStateToProps)(Catalog);
