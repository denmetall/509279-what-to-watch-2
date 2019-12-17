import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationRequired, getUserData} from "../../selectors";
import PropTypes from "prop-types";
import {BASE_URL_SERVER, UserType} from "../../utils";

const UserBlock = (props) => {
  const {isAuthorizationRequired, userData} = props;
  return <div className="user-block">
    {isAuthorizationRequired ?
      (<Link to="/my-list" className="user-block__avatar">
        <img src={`${BASE_URL_SERVER}/${userData.avatarUrl}`} alt="User avatar" width="63" height="63"/>
      </Link>) :
      (<Link to="/login" className="user-block__link">Sign in</Link>)
    }
  </div>;
};

const mapStateToProps = (state) => {
  return {
    userData: getUserData(state),
    isAuthorizationRequired: getAuthorizationRequired(state)
  };
};

UserBlock.defaultProps = {
  isAuthorizationRequired: false,
  userData: {
    avatarUrl: ``
  }
};

UserBlock.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  userData: UserType
};

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
