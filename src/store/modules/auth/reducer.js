import produce from 'immer';
import initialState from './initialState';

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
    }
  });
}
