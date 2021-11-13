import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { cryptoReducer } from './crypto/crypto';
import { cryptosReducer } from './cryptos/cryptos';

const reducer = combineReducers({
  cryptos: cryptosReducer,
  crypto: cryptoReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, reduxThunk),
);

export default store;
