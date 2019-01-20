import { INIT_USER, UserState } from './types';

export function initUser(rootState: UserState) {
  return {
    type: INIT_USER,
    payload: rootState
  };
}
