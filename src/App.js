import React, { Component } from 'react';
import Navigators from './navigators';
import { perikopen } from './db/perikopen';
import { List } from 'immutable';
import { connect } from 'react-redux';
import moment from 'moment';
import { initPerikopen, setPerikopenToday } from 'actions/perikopen';


class App extends Component {
	componentWillMount() {
		console.log('Root Component Will Mount, Oke');
		this.setTodayPerikopen();
		console.log('result');
	}
	setTodayPerikopen() {
      const listArr = List(perikopen);
      const today = moment().format('YYYY-MM-DD');
      const now = moment(today).format('x');
      const filtered = listArr.filter( x => {
        return x.timeStamp >= now;
      });
      const result = filtered.first() || {};
      console.log(result);
      this.props.setPerikopenToday(result);
    }
	render(){
		return (
			<Navigators />
		);
	}
}

export default connect( state => ({ nav: state.nav }),
	{ dispatch: initPerikopen, setPerikopenToday } )(App);
