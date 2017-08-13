import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';
import Navigators from './navigators';
import moment from 'moment';
import perikopenDB from './db/perikopen.json';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { initPerikopen, setPerikopenToday, getPerikopen } from 'actions/perikopen';
var filter = require('lodash.filter');


class App extends Component {
	componentDidMount() {
		console.log('ComponentDidMount');
		console.log(this.props.perikopen);
	}
	componentWillMount() {
		console.log('componentWillMount');
		this.props.initPerikopen(perikopenDB);
		const today = moment().format('YYYY-MM-DD');
		const todayOnUnixFormat = moment(today).unix();
		console.log(todayOnUnixFormat);
	}
	render(){
		const a = this.props.perikopen.map( x=> {
			return (
				<Text key={x.timeStamp}>HEllo</Text>
			);
		})
		return (
			<View>
				{a}
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		perikopen: state.perikopen.perikopens
	};
};
export default connect( mapStateToProps, { initPerikopen } )(App);
