import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import * as loginActions from '../actions/login-actions';


class AppHeader extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.logout());
    this.props.logout();
  }

  render() {
    const {isLoggedIn, username, role, isFetching} = this.props;

    return (
      <header className='app-header'>
        <nav className='app-header__nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>

        </nav>
        <div className='app-header__login'>
          {/* {
            isLoggedIn
              ? `${username} (${role})`
              :   <form onSubmit={this.onSubmit}>
                  <button type='submit' disabled={isFetching}>
                    Log Out
                  </button>
                </form>
          } */}
          {
            isLoggedIn
            ? <div>`${username} (${role})`
                <form onSubmit={this.onSubmit}>
                  <button type='submit' disabled={isFetching}>
                    Log Out
                  </button>
                </form>
              </div>
            : <Link to='/login'>
              Login
              </Link>
            }

        </div>

      </header>
    );
  }
}

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  role: PropTypes.string,
  logout: PropTypes.func,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {isLoggedIn: state.login.isLoggedIn, username: state.login.user.username, role: state.login.user.role, isFetching: state.logout.isFetching};
};

export default connect(mapStateToProps, loginActions)(AppHeader);
