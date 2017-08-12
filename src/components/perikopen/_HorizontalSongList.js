import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
		View
} from 'react-native';

import FlexDirection from 'styles/flexDirection';

export default class HorizontalSongList extends Component {
	render() {
		return (
			<View style={[FlexDirection.row, styles.containerList]}>
				<Text style={[styles.keySongs]}>
					{this.props.bookName || 'KJ' }
				</Text>
				{ this.props.listSongs }
			</View>
		);
	}
}


const styles = StyleSheet.create({
	keySongs: {
		marginRight: 10,
		fontWeight: '500'
	},
	songListHorizontal: {
		backgroundColor: 'yellow'
	},
	containerList: {
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10
	}
});
