import {
  INIT_USER,
  UserState,
  UserActionTypes,
  FETCH_USER_SUCCESS
} from './types';

const initialState: UserState = {
  name: 'User State'
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case INIT_USER: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}
