import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../history';

import AssetDetailsSlice from "../slices/AssetDetailsSlice/AssetDetailsSlice";

const rootReducer = combineReducers({
  router: connectRouter(history),
  [AssetDetailsSlice.name]: AssetDetailsSlice.Reducer,
});

export default rootReducer;
