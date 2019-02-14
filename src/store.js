import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import songlist from './duck/songlist';
import common from './duck/common';

const rootReducer = combineReducers({
  songlist,
  common
});

const enhancers = [];
const middlewares = [thunk, promiseMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default function configureStore() {
  return createStore(rootReducer, composedEnhancers);
}
