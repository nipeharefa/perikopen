import React, { Component}  from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import FlexDirection from 'styles/flexDirection';
import Style from './styles';

class DayInfo extends Component {
	render() {
		const info = this.props.info;
		return (
			<View style={styles.containerDayInfo}>
				<View style={[FlexDirection.row, styles.rowDayInfo]}>
						<Text style={Style.columnKey}>
							Nama Minggu
						</Text>
						<Text style={Style.columnTitikDua}>
							:
						</Text>
						<Text style={Style.description}>
							{ info.name }
						</Text>
					</View>
				<View style={[FlexDirection.row, styles.rowDayInfo]}>
					<Text style={Style.columnKey}>
						Warna
					</Text>
					<Text style={Style.columnTitikDua}>
						:
					</Text>
					<Text style={Style.description}>
						{ info.color }
					</Text>
				</View>
				<View style={[FlexDirection.row, styles.rowDayInfo]}>
					<Text style={Style.columnKey}>
						Tata Ibadah
					</Text>
					<Text style={Style.columnTitikDua}>
						:
					</Text>
					<Text style={Style.description}>
						{ info.tata_ibadah }
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerDayInfo: {
		marginTop: 20
	},
	rowDayInfo: {
		marginTop: 2,
		marginBottom: 2
	}
});


export default DayInfo;
