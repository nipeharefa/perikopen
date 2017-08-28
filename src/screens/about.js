import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import InfoApp from 'components/about/infoApp';

class About extends Component {
	render() {
		return (
			<View style={styles.containerAbout}>
				<InfoApp />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerAbout: {
		marginTop: 20
	},
});



export default About;
