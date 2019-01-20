export interface UserState {
  name: string;
}

export const INIT_USER = 'INIT_USER';

interface InitUserAction {
  type: typeof INIT_USER;
  payload: UserState;
}

export type UserActionTypes = InitUserAction;
