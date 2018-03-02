import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { USER_FETCH_USER_REQUESTED } from '../ducks/user';
import { setUserDataAction } from '../ducks/user';



export function* userSaga() {
    console.log('user saga run');
    yield takeEvery(USER_FETCH_USER_REQUESTED, fetchUser);
}

function* fetchUser(action) {

    yield delay(3000);
    const fakeUser = {
        username: 'some_user',
        token: 'some_token'
    };

    yield put(setUserDataAction(fakeUser));
}