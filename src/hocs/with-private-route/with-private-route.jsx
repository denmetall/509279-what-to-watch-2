import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

import {getAuthStatus} from "../../selectors/index";

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    const {authorized} = props;

    if (!authorized) {
      return <Redirect to="/login"/>;
    }

    return <Component {...props}/>;
  };

  WithPrivateRoute.defaultProps = {
    authorized: false
  };

  WithPrivateRoute.propTypes = {
    authorized: PropTypes.bool
  };

  const displayName = Component.displayName || Component.name;
  WithPrivateRoute.displayName = `WithPrivateRoute(${displayName})`;
  WithPrivateRoute.WrappedComponent = Component;

  return WithPrivateRoute;
};

const mapStateToProps = (state) => ({
  authorized: getAuthStatus(state),
});

export default compose(
    connect(mapStateToProps),
    withPrivateRoute
);
