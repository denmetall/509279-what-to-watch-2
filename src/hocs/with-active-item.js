import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieId: null
      };

      this._handlerMouseOverCard = this._handlerMouseOverCard.bind(this);
      this._handlerMouseOutCard = this._handlerMouseOutCard.bind(this);
    }

    render() {
      const {activeMovieId} = this.state;
      return <Component
        {...this.props}
        onMouseOverCard={this._handlerMouseOverCard}
        onMouseOutCard={this._handlerMouseOutCard}
        activeMovieId={activeMovieId}
      />;
    }

    _handlerMouseOverCard(film) {
      this.setState({
        activeMovieId: film.id
      });
    }

    _handlerMouseOutCard() {
      this.setState({
        activeMovieId: null
      });
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
