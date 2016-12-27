//import { delay } from "redux-saga"
import { put, call, takeEvery } from "redux-saga/effects"
import { addApiNum } from "../actions"

let api_num10 = 'http://www.json-generator.com/api/json/get/ceBNlvPlrC' // return {num: 10}

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

export function* apiAsync() {
  let res = yield call(api, api_num10);
  console.log(res)
  yield put(addApiNum(res.num));
}

export default function* rootSaga() {
  yield takeEvery('API_ASYNC', apiAsync)
}
