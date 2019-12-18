import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Footer from "../footer/footer.jsx";
import Logo from "../logo/logo.jsx";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthStatus} from "../../selectors";

const SignIn = (props) => {
  const {onChange, onSubmit, errors, isValid, authorized} = props;
  const emailClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.email.length});
  const passwordClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.password.length});

  if (authorized) {
    return <Redirect to="/"/>;
  }

  return <div className="user-page">

    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">Sign In</h1>
    </header>

    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form">

        {!isValid &&
        <div className="sign-in__message">
          <p>{errors.email || errors.password}</p>
        </div>}

        <div className="sign-in__fields">
          <div className={emailClasses}>
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="email"
              id="user-email"
              onChange={onChange}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={passwordClasses}>
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              id="user-password"
              onChange={onChange}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
            onClick={onSubmit}
            disabled={!isValid}
          >
            Sign in</button>
        </div>
      </form>
    </div>

    <Footer/>
  </div>;
};

SignIn.defaultProps = {
  formData: {},
  onChange: () => {},
  onSubmit: () => {},
  errors: {},
  isValid: false,
  authorized: false
};

SignIn.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  isValid: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorized: getAuthStatus(state),
});

export {SignIn};

export default connect(mapStateToProps)(SignIn);

