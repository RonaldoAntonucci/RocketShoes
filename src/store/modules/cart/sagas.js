import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSucces } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucces(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
