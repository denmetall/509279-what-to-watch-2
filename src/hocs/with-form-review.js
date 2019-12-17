import React, {PureComponent} from 'react';
import {CommentLength, MAX_RATING} from "../utils";

const ratingErrorMessage = `You should chose the rating of the movie.`;
const commentErrorMessage = `
  The text field may be greater than ${CommentLength.MIN} characters and not be greater than ${CommentLength.MAX} characters.
`;

const withFormReview = (Component) => {
  class WithFormReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        isCommentValid: false,
        rating: 0,
        isRatingValid: false,
        isFormValid: false,
        isShowError: false,
      };

      this._userInputHandler = this._userInputHandler.bind(this);
      this._showErrorHandler = this._showErrorHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        comment={this.state.comment}
        isCommentValid={this.state.isCommentValid}
        commentErrorMessage={commentErrorMessage}
        rating={parseInt(this.state.rating, 10)}
        isRatingValid={this.state.isRatingValid}
        ratingErrorMessage={ratingErrorMessage}
        isFormValid={this.state.isFormValid}
        isShowError={this.state.isShowError}
        onShowError={this._showErrorHandler}
        onUserInput={this._userInputHandler}
      />;
    }

    _userInputHandler(evt) {
      const name = evt.target.name;
      const value = evt.target.value;
      this.setState({[name]: value}, () => this._validateFields(name, value));
    }

    _validateFields(name, value) {
      let isCommentValid = this.state.isCommentValid;
      let isRatingValid = this.state.isRatingValid;

      switch (name) {
        case `comment`:
          isCommentValid = value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;
          break;
        case `rating`:
          isRatingValid = value > 0 && value <= MAX_RATING;
          break;
      }

      this.setState({
        isCommentValid,
        isRatingValid,
        isFormValid: isCommentValid && isRatingValid
      });
    }

    _showErrorHandler(state) {
      this.setState({isShowError: state});
    }
  }

  WithFormReview.propTypes = {};

  return WithFormReview;
};

export default withFormReview;
