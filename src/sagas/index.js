import { delay } from "redux-saga"
import { put, call, takeEvery } from "redux-saga/effects"
import { increment } from "../actions"

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(increment());
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
