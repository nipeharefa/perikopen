import React, { Component}  from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import Style from './styles';
import FlexDirection from 'styles/flexDirection';

class ReadingList extends Component {
	render() {
		const readingList = this.props.readingList;
		const Bacaan = readingList.map((t, i) => {
			return (
				<View style={[FlexDirection.row, styles.rowReading]} key={i}>
					<Text style={Style.columnKey}>
						{t.kitab}
					</Text>
					<Text style={Style.columnTitikDua}>
						{t.chapter}
					</Text>
					<Text style={Style.description}>
						{t.verses_start} - {t.verses_end}
					</Text>
				</View>
			);
		});

		return (
			<View style={[styles.containerBacaan]}>
				{Bacaan}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerBacaan: {
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 20,
		marginBottom: 20
	},
	rowReading: {
		marginTop: 5,
		marginBottom: 5
	}
});

export default ReadingList;
