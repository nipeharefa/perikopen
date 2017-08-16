import { INIT_PERIKOPEN, SET_ACTIVE_PERIKOPEN } from '../constants';

const initialState = {
	perikopens: [],
	activeIndex: null
};

export default function update(state = initialState, action) {
	switch (action.type) {
		case INIT_PERIKOPEN:
			return Object.assign({}, state, {
				perikopens: action.payload
      });
    case SET_ACTIVE_PERIKOPEN:
      return Object.assign({}, state, {
        activeIndex: action.payload
      });
		default:
			return state;
	}
}
