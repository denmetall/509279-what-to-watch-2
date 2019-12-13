import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationRequired, getUserData} from "../../selectors";
import PropTypes from "prop-types";
import {BASE_URL_SERVER} from "../../utils";

const UserBlock = (props) => {
  const {isAuthorizationRequired, userData} = props;

  console.log(isAuthorizationRequired);

  return <div className="user-block">
    {isAuthorizationRequired ?
      (<div className="user-block__avatar">
        <img src={`${BASE_URL_SERVER}/${userData.avatarUrl}`} alt="User avatar" width="63" height="63"/>
      </div>) :
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

// UserBlock.propTypes = {
//   avatar: PropTypes.string
// };

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
