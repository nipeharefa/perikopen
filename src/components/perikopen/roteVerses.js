import React, { Component}  from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import FlexDirection from 'styles/flexDirection';

class RoteVerses extends Component {
	render() {
		const hafalan = this.props.hafalan;
		return (
			<View style={[FlexDirection.column, styles.containerHafalan]}>
				<Text style={styles.hafalan}>
					{ hafalan.ayat_string }
				</Text>
				<Text style={styles.hafalan}>
					{ hafalan.ayat.kitab } { hafalan.ayat.chapter } : { hafalan.ayat.verse }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerHafalan: {
		marginTop: 10
	},
	hafalan: {
		textAlign: 'center',
		fontStyle: 'italic'
	}
});

export default RoteVerses;
