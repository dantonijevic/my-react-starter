// @flow

import { createAction } from 'redux-actions';
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export const USER_SET_USER_DATA = 'user::set_user_data';
export const USER_FETCH_USER_REQUESTED = 'user::fetch_user_requested';

const User = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_USER_DATA:
      console.log('set user data');
      state = state.set('username', action.payload.username);
      state = state.set('token', action.payload.token);
      return state;
    default:
      return initialState;
  }
};

export const setUserDataAction = createAction(USER_SET_USER_DATA);
export const fetchUserAction = createAction(USER_FETCH_USER_REQUESTED);

export default User;
