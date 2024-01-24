import {
  all, fork, put, takeEvery, delay
} from 'redux-saga/effects';

import AssetDetailsSlice from "../../slices/AssetDetailsSlice/AssetDetailsSlice";

import { AmazonData } from './AmazonYTD';

export function* fetch() {
  try {
    yield delay(2500);
    yield put(AssetDetailsSlice.Actions.fetchSuccess(AmazonData));
  } catch (error) {
    yield put(AssetDetailsSlice.Actions.fetchFailed());
    console.error(error);
  }
}

export function* addWatchers() {
  yield takeEvery(AssetDetailsSlice.Actions.fetch, fetch);
}

function* assetDetailsSaga() {
  yield all([
    fork(addWatchers),
  ]);
}

export default assetDetailsSaga;
