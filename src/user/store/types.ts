export interface UserState {
  name: string;
}

export const INIT_USER = 'USER:INIT_USER';
export const FETCH_USER = 'USER:FETCH_USER';
export const FETCH_USER_SUCCESS = 'USER:FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'USER:FETCH_USER_FAIL';

export interface InitUserAction {
  type: typeof INIT_USER;
  payload: UserState;
}

export interface FetchUserAction {
  type: typeof FETCH_USER;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: UserState;
}

export interface FetchUserFailAction {
  type: typeof FETCH_USER_FAIL;
  // TODO payload: Error PayLoad
}

export type UserActionTypes =
  | InitUserAction
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserFailAction;
