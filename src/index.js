import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Redux Reducers
// --------------------------

const feedbackReducerInitialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};

const feedbackReducer = (state = feedbackReducerInitialState, action) => {
  // set up different action.type conditional checks that utilize spread to update individual key/value pairs on initial state
  if (action.type === 'UPDATE_FEELING') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'UPDATE_UNDERSTANDING') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'UPDATE_COMMENTS') {
    return { ...state, ...action.payload };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
