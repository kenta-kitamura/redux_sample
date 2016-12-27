//import { delay } from "redux-saga"
import { put, call, takeEvery } from "redux-saga/effects"
import { addApiNum, minusApiNum } from "../actions"

let api_num10 = 'http://www.json-generator.com/api/json/get/ceBNlvPlrC' // return {num: 10}
let api_num2 = 'http://www.json-generator.com/api/json/get/cpQZlzXnci?indent=2' // return {num: 2}

// external API
const api = (uri) => {
  return fetch(uri)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error
    })
}

export function* addApiAsync() {
  let res = yield call(api, api_num10);
  yield put(addApiNum(res.num));
}

export function* minusApiAsync() {
  let res = yield call(api, api_num2);
  yield put(minusApiNum(res.num));
}

export default function* rootSaga() {
  yield takeEvery('API_ASYNC', addApiAsync)
  yield takeEvery('API_ASYNC_MINUS', minusApiAsync)
}
