import React from 'react';
import PropTypes from 'prop-types';

import withLoginForm from './../../hocs/with-login-form';

const SignIn = (props) => {
  const {
    onEmailInput,
    onPasswordInput,
    onSubmit
  } = props;

  return <div className="sign-in user-page__content">
    <form action="#" className="sign-in__form" onSubmit={onSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            onChange={onEmailInput}
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            onChange={onPasswordInput}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  </div>;
};

SignIn.propTypes = {
  onEmailInput: PropTypes.func,
  onPasswordInput: PropTypes.func,
  onSubmit: PropTypes.func
};

SignIn.defaultProps = {
  onEmailInput: () => {},
  onPasswordInput: () => {},
  onSubmit: () => {}
};

export {SignIn};
export default withLoginForm(SignIn);
