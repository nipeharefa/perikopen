import { List } from 'immutable';

const search = (statePerikopen, timestampTarget)=> {
	const listArr = List(statePerikopen);
	const filtered = listArr.filter( x => {
		return x.timeStamp === timestampTarget;
	});
	const result = filtered.first() || {};
	return result;
};

module.exports = search;
