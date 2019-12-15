import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

import {Operation as AuthOperation} from './../reducer/authorization/authorization';
import {connect} from 'react-redux';

const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
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
      const {history} = this.props;
      evt.preventDefault();

      this.props.onAuthorize({
        email: this.state.email,
        password: this.state.password
      });

      history.push(`/`);
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
    onAuthorize: PropTypes.func,
    history: PropTypes.object.isRequired
  };

  WithLoginForm.defaultProps = {
    onAuthorize: () => {}
  };

  const mapDispatchToProps = (dispatch) => ({
    onAuthorize: (data) => {
      dispatch(AuthOperation.login(data));
    }
  });

  return connect(null, mapDispatchToProps)(withRouter(WithLoginForm));
};

export default withLoginForm;
