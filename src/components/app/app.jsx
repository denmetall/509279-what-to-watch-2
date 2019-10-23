import React, {Fragment, Component} from 'react';
import MovieCard from "../movie-card/movie-card.jsx";
import PageContent from "../page-content/page-content.jsx";
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return <Fragment>
      <MovieCard />
      <PageContent films={films}/>
    </Fragment>;
  }
}

App.propType = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
