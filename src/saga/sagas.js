import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {loadCountryListSuccess, LOAD_COUNTRY_ERROR, LOAD_COUNTRY_LOADING, LOAD_COUNTRY_SUCCESS} from "./actions";
import Api from '../api'

async function fetchAsync(func) {
    const response = await func();

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Unexpected error!!!");
}

function* fetchUser() {
    try {
        const users = yield fetchAsync(Api.getCountryLists);

        yield put({type: LOAD_COUNTRY_SUCCESS, data: users});
    } catch (e) {
        yield put({type: LOAD_COUNTRY_ERROR, error: e.message});
    }
}

export function* usersSaga() {
    // Allows concurrent fetches of users
    yield takeEvery(LOAD_COUNTRY_LOADING, fetchUser);

    // Does not allow concurrent fetches of users
    // yield takeLatest(LOAD_COUNTRY_LOADING, fetchUser);
}

export default usersSaga;