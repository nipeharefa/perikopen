import React, { Component}  from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import styles from './styles';

class InfoApp extends Component {
	render() {
		return (
			<View style={styles.centered}>
				<Text>Perikopen BNKP 2017</Text>
				<Text>Versi <Text style={styleLocale.bold}>0.1</Text></Text>
			</View>
		);
	}
}

const styleLocale = StyleSheet.create({
	bold: {
		fontWeight: '600'
	},
});


export default InfoApp;
