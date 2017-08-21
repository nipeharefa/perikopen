import React, { Component } from 'react';
import {
	AsyncStorage,
	Text
} from 'react-native';
import Navigators from './navigators';
import moment from 'moment';
import perikopenDB from './db/perikopen.json';
import { connect } from 'react-redux';
import { initPerikopen, setActivePerikopen } from 'actions/perikopen';


class App extends Component {
	setDbIntoAsyStorage = async () => {
		try {
			const a = await AsyncStorage.getItem('p.db2');
			if (a) {
				return JSON.parse(a);
			}
			const str = JSON.stringify(perikopenDB);
			const results = await AsyncStorage.setItem('p.db', str);
			return JSON.parse(results);
		} catch (error) {
			return perikopenDB;
		}
	}
	componentWillMount() {
		console.log('componentWillMount');
		const self = this;
		this.cari().then( x => {
			const index = self.getIndexTodayPerikopen();
			self.props.setActivePerikopen(index);
		});
	}
	componentDidMount() {
		console.log('ComponentDidMount');
	}
	async cari() {
		await this.props.initPerikopen(perikopenDB);
	}
	getIndexTodayPerikopen () {
		const today = moment().format('YYYY-MM-DD');
		const todayOnUnixFormat = moment(today).unix();
		console.info(todayOnUnixFormat);
		const activeIndex = this.props.perikopen.findIndex( x => {
			return x.timeStamp >= todayOnUnixFormat;
		});
		return activeIndex;
	}
	render() {
		const ContainerScreen = () => {
			if (this.props.activeIndex != null) {
				return ( <Navigators /> );
			} else {
				return (<Text>Hello</Text>);
			}
		};
		return (
			<ContainerScreen />
		);
	}
}

const mapStateToProps = state => {
	return {
		perikopen: state.perikopen.perikopens,
		activeIndex: state.perikopen.activeIndex
	};
};

const mapActionToProps = dispatch => {
	return {
		initPerikopen(data) {
			dispatch(initPerikopen(data));
		},
		setActivePerikopen(data) {
			dispatch(setActivePerikopen(data));
		}
	};
};

export default connect( mapStateToProps, mapActionToProps )(App);
