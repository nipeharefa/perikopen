import { List } from 'immutable'
import moment from 'moment'

const search = (statePerikopen, timestampTarget)=> {
	const listArr = List(statePerikopen)
	const today = moment().format('YYYY-MM-DD');
	const filtered = listArr.filter( x => {
		return x.timeStamp == timestampTarget
	})
	const result = filtered.first() || {}
	return result
}

module.exports = search