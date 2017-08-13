import { INIT_PERIKOPEN, SET_TODAY_PERIKOPEN, GET_PERIKOPEN } from '../constants';

const initialState = {
  perikopens: [],
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case INIT_PERIKOPEN:
      Object.assign({}, state, {
        perikopens: action.payload
      });
      return state;
    default:
      return state;
  }
}
