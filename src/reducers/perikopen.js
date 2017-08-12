import { List, Map } from 'immutable';
import { INIT_PERIKOPEN, SET_TODAY_PERIKOPEN } from '../constants';

const perikopen = Map({
  items: List([]),
  today: Map(),
  perikopens: List([])
});

export default function update(todos = perikopen, action) {
  switch (action.type) {
    case INIT_PERIKOPEN:
      return todos.set('items', List(action.payload));
    case SET_TODAY_PERIKOPEN:
      return todos.set('today', action.payload);
    default:
      return todos;
  }
}
