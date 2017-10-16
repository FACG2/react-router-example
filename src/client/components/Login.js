import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as loginActions from '../actions/login-actions';

class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    this.props.login(user);
  }

  render() {
    const { isFetching, isLoggedIn } = this.props;

    if (isLoggedIn) return <Redirect to='/' />;

    return (
      <article>
        <header>
          <h1>Login</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='username' />
          <input type='text' name='password' />
          <button type='submit' disabled={isFetching}>
            Log in
          </button>
        </form>
      </article>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps, loginActions)(Login);
