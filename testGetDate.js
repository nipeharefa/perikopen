const moment = require('moment');
const List =  require('immutable').List;
const perikopen  =  require('./src/db/perikopen.json');

const listArr = List(perikopen);
const today = moment().format('YYYY-MM-DD');
const todayOnUnixFormat = moment(today).unix();

const filtered = listArr.filter( x => {
    console.log(x.timeStamp)
    return x.timeStamp >= todayOnUnixFormat;
});

const result = filtered.first() || {};

console.log('Today');
console.log(today);
console.log(todayOnUnixFormat);
console.log(typeof todayOnUnixFormat);
console.log(filtered.first());