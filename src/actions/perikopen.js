import moment from 'moment';
import { INIT_PERIKOPEN,
	GET_TODAY_PERIKOPEN,
	SET_TODAY_PERIKOPEN,
	GET_PERIKOPEN,
	FILL_PERIKOPENS } from '../constants';

export function fillPerikopen(n) {
	return {
		type: FILL_PERIKOPENS,
		payload: n
	};
}

export function getPerikopen() {
	return {
		type: GET_PERIKOPEN
	}
}

export function initPerikopen(n) {
	return {
		type: INIT_PERIKOPEN,
		payload: n
	};
}

export function getPerikopenToday() {
	var today = moment().format('YYYY-MM-YY');
	var now = moment(today).format('x');
	return {
		type: GET_TODAY_PERIKOPEN,
		payload: now
	};
}

export function setPerikopenToday(n) {
	return {
		type: SET_TODAY_PERIKOPEN,
		payload: n
	};
}
