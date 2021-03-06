import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class AppHeader extends Component {
  render() {
    const { isLoggedIn, username, role } = this.props;

    return (
      <header className='app-header'>
        <nav className='app-header__nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <div className='app-header__login'>
          {
            isLoggedIn
              ? `${username} (${role})`
              : <Link to='/login'>Login</Link>
          }
        </div>
      </header>
    );
  }
}

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  role: PropTypes.string
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    username: state.login.user.username,
    role: state.login.user.role
  };
};

export default connect(mapStateToProps)(AppHeader);
