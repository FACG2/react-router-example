import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import createStore from './reducers';

import Nav from './components/Nav';
import Counter from './components/Counter';
import Home from './components/Home';

import './styles/index.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
