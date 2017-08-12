import React, { Component}  from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './styles';

class DayInfo extends Component {
	render() {
		return (
			<View style={styles.centered}>
				<TouchableOpacity>
					<Text>Date today</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default DayInfo;
