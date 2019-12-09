import React from 'react';
import {connect} from 'react-redux';
import {getAvatar} from "../../selectors";
import PropTypes from "prop-types";

const UserBlock = (props) => {
  const {avatar} = props;
  return <div className="user-block">
    {avatar ?
      (<div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
      </div>) :
      (<a href="sign-in.html" className="user-block__link">Sign in</a>)
    }
  </div>;
};

const mapStateToProps = (state) => {
  return {
    avatar: getAvatar(state)
  };
};

UserBlock.propTypes = {
  avatar: PropTypes.string
};

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
