import React, { Component}  from 'react';
import {
	Text,
	View
} from 'react-native';

import FlexDirection from 'styles/flexDirection';

class DayInfo extends Component {
	render() {
		return (
			<View>
				<View style={[FlexDirection.row]}>
						<Text>
							Nama Minggu
						</Text>
						<Text>
							:
						</Text>
						<Text>
							Sample
						</Text>
					</View>
			</View>
		);
	}
}

export default DayInfo;
