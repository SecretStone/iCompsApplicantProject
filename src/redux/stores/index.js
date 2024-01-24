import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import history from '../../history';
import reducers from '../reducers/rootReducer';
import rootSaga from '../sagas/sagas';

export const configureStore = () => {
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [routeMiddleware, sagaMiddleware];
  const env = process.env.NODE_ENV;

  const composeEnhancers =
    env === 'development'
      ? (typeof window !== 'undefined' ? window : {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
      : compose;

  const store = createStore(connectRouter(history)(reducers), composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

export default store;
