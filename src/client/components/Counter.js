import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as counterActions from '../actions/counter-actions';

class Counter extends Component {
  render() {
    const { count, counterIncrement, counterDecrement } = this.props;

    return (
      <div className='counter'>
        <h2 className='counter__title'>Counter</h2>
        <div className='counter__count'>
          { count }
        </div>
        <button
          className='counter__button'
          onClick={counterIncrement}
          type='button'
        >Increment</button>
        <button
          className='counter__button'
          onClick={counterDecrement}
          type='button'
        >Decrement</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  counterIncrement: PropTypes.func,
  counterDecrement: PropTypes.func
};

const mapStateToProps = state => {
  return state.counter;
};

export default connect(mapStateToProps, counterActions)(Counter);
