import { takeLatest, put } from "redux-saga/effects";
import {
    FETCH_MORE_CATS_SAGA_START,
    FETCH_MORE_CATS_SAGA_SUCCESS,
    FETCH_MORE_CATS} from "./sagaTypes";


function* fetchMoreCatsSaga(){
    yield put({type: FETCH_MORE_CATS_SAGA_START})

    const catResponse = yield fetch("https://api.thecatapi.com/v1/images/search?limit=5",{
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "c547a57f-b0e8-4785-90ef-0a9a18698fa1"
        }
    })

    const cats = yield catResponse.json();

    yield put({type: FETCH_MORE_CATS_SAGA_SUCCESS, payload: cats})
}


export default function* watchFetchMoreSaga() {
    yield takeLatest(FETCH_MORE_CATS, fetchMoreCatsSaga);
}


