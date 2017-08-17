import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	DatePickerAndroid,
	StyleSheet,
	ScrollView,
	View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import moment from 'moment';

import DayInfo from 'components/perikopen/dayInfo';
import DateInfo from 'components/perikopen/dateInfo';
import ReadingList from 'components/perikopen/readingList';
import RoteVerses from 'components/perikopen/roteVerses';
import SongList from 'components/perikopen/songList';

import { setActivePerikopen } from 'actions/perikopen';

class Perikopen extends Component {

	static title = 'DatePickerAndroid';
	static description = 'Standard Android date picker dialog';

	state = {
		presetDate: new Date(2020, 4, 5),
		simpleDate: new Date(2020, 4, 5),
		spinnerDate: new Date(2020, 4, 5),
		calendarDate: new Date(2020, 4, 5),
		defaultDate: new Date(2020, 4, 5),
		allDate: new Date(2020, 4, 5),
		simpleText: 'pick a date',
		spinnerText: 'pick a date',
		calendarText: 'pick a date',
		defaultText: 'pick a date',
		minText: 'pick a date, no earlier than today',
		maxText: 'pick a date, no later than today',
		presetText: 'pick a date, preset to 2020/5/5',
		allText: 'pick a date between 2020/5/1 and 2020/5/10',

	}
	showPicker = async (stateKey, options) => {
		try {
			const {action, year, month, day} = await DatePickerAndroid.open(options);
			if (action === DatePickerAndroid.dismissedAction) {
				return;
			} else {
				var date = new Date(year, month, day);
				const timestampTarget = moment(date).unix();
				const activeIndex = this.props.perikopen.findIndex( x => {
					return x.timeStamp === timestampTarget;
				});
				console.log(activeIndex);
				if (activeIndex >= 0) {
					this.props.setActivePerikopen(activeIndex);
					return;
				}
				return;
			}
		} catch ({code, message}) {
				console.warn(`Error in example '${stateKey}': `, message);
		}
	}
	render() {
		const index = this.props.activeIndex;
		const perikopen = this.props.perikopen[index];
		const calendarDate = moment.unix(perikopen.timeStamp).toDate();
		const customTextButton = (
			<Icon name="calendar" size={25} color="white" />
		);
		const showPicker = this.showPicker.bind(this, 'calendar', {date: calendarDate, mode: 'calendar'});
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<DateInfo dateString={perikopen.dateString}/>
					<DayInfo info={perikopen.info}/>
					<ReadingList readingList={ perikopen.bacaan }/>
					<RoteVerses hafalan={ perikopen.hafalan } />
					<SongList songs={ perikopen.songs } />
				</ScrollView>
				<ActionButton
					buttonColor="rgba(231,76,60,1)"
					onPress={ showPicker }
					degrees={0} icon={customTextButton}>
					<Icon name="calendar" style={styles.actionButtonIcon} />
				</ActionButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
	calendarButton: {
		position: 'absolute',
		bottom: 35,
		right: 15,
		borderColor:'#fafafa',
		borderWidth: 0.5
	}
});

const mapStateToProps = state => {
	return {
		activeIndex: state.perikopen.activeIndex,
		perikopen: state.perikopen.perikopens
	};
};

const mapActionToProps = dispatch => {
	return {
		setActivePerikopen(data) {
			dispatch(setActivePerikopen(data));
		}
	};
};

export default connect( mapStateToProps, mapActionToProps )(Perikopen);
