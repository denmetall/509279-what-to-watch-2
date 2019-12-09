import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import {Operation as AuthOperation} from './../reducer/authorization/authorization';
import {connect} from 'react-redux';

const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isValid: false
      };

      this.handleEmailInput = this.handleEmailInput.bind(this);
      this.handlePasswordInput = this.handlePasswordInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailInput(evt) {
      this.setState({
        email: evt.currentTarget.value
      });
    }

    handlePasswordInput(evt) {
      this.setState({
        password: evt.currentTarget.value
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();

      this.props.onAuthorize({
        email: this.state.email,
        password: this.state.password
      });
    }

    render() {
      return (
        <Component
          onEmailInput={this.handleEmailInput}
          onPasswordInput={this.handlePasswordInput}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithLoginForm.propTypes = {
    onAuthorize: PropTypes.func
  };

  WithLoginForm.defaultProps = {
    onAuthorize: () => {}
  };

  const mapStateToProps = () => ({
    isAuthorizationRequired: false
  });

  const mapDispatchToProps = (dispatch) => ({
    onAuthorize: (data) => {
      dispatch(AuthOperation.login(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithLoginForm);
};

export default withLoginForm;
