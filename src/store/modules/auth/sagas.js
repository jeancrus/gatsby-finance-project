import { all, takeLatest, put, call } from 'redux-saga/effects';

export function* signIn({ payload }) {}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
