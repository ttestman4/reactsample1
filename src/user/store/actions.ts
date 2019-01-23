import * as fromAction from './types';

export function initUser(
  rootState: fromAction.UserState
): fromAction.InitUserAction {
  return {
    type: fromAction.INIT_USER,
    payload: rootState
  };
}

export function fetchUser(): fromAction.FetchUserAction {
  return {
    type: fromAction.FETCH_USER
  };
}

export function fetchUserSuccess(
  userState: fromAction.UserState
): fromAction.FetchUserSuccessAction {
  return {
    type: fromAction.FETCH_USER_SUCCESS,
    payload: userState
  };
}

export function fetchUserFail(): fromAction.FetchUserFailAction {
  return {
    type: fromAction.FETCH_USER_FAIL
  };
}
