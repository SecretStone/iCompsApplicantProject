import { createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';

/**
 * The name of the state slice
 * @type {string}
 */
const NAME = 'AssetDetails';

/**
 * Path to the state slice from rootState
 * @type {string}
 */
export const STORE_PATH = `${NAME}`;

/**
 * Initial state for the state slice
 */
const InitialState = {
  data: null,
  fetching: false,
};

/* ------------------------------------------------------------------------------------------------------------------ */

/**
 * Returns the whole slice object based on STORE_PATH and NAME
 * @param state
 * @returns {Object}
 */
const getSlice = (state) => get(state, STORE_PATH, InitialState);

const getData = (state) => get(getSlice(state), 'data', null);

const isFetching = (state) => get(getSlice(state), 'fetching', false);

/* ------------------------------------------------------------------------------------------------------------------ */

/**
 * Slice definition
 */
const assetDetailsSlice = createSlice({
  name: STORE_PATH,
  initialState: InitialState,
  reducers: {
    fetch: {
      reducer: (state,) => {
        state.fetching = true;
      },
    },
    fetchSuccess: {
      reducer: (state, action) => {
        state.fetching = false;
        state.data = action.payload.data;
      },
      prepare: (data) => ({ payload: { data } }),
    },
    fetchFailed: {
      reducer: (state) => {
        state.fetching = false;
      },
    },
  },
});

export const AssetDetailsSlice = {
  Actions: {
    ...assetDetailsSlice.actions,
  },
  InitialState,
  name: NAME,
  Reducer: assetDetailsSlice.reducer,
  Selectors: {
    get: getSlice,
    getData,
    isFetching,
  },
  PropTypes: {},
  storePath: STORE_PATH,
};

export default AssetDetailsSlice;
