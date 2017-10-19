import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as logoutActions from '../actions/logout-actions';

class Logout extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isFetching, isLoggedIn } = this.props;

    if (!isLoggedIn) return <Redirect to='/' />;

    return (
      <article>
        <header>
          <h1>Logout</h1>
        </header>
        <button type='submit' disabled={isFetching}>
          Log out
        </button>
      </article>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isFetching: state.logout.isFetching,
    isLoggedIn: state.logout.isLoggedIn
  };
};

export default connect(mapStateToProps, logoutActions)(Logout);
