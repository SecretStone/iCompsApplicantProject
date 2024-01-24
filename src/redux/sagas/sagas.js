import { all, fork } from 'redux-saga/effects';
import assetDetailsSaga from './AssetDetailsSaga/AssetDetailsSaga';

function* rootSaga() {
  yield all([
    fork(assetDetailsSaga),
  ]);
}

export default rootSaga;
