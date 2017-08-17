import { Dimensions, StyleSheet } from 'react-native';

var { height } = Dimensions.get('window');
console.log(height);
export default StyleSheet.create({
	fullWidth: {
		flex: 1
	},
	centered: {
		alignItems: 'center'
	},
	columnKey: {
		flex: 0.5
	},
	columnTitikDua: {
		flex: 0.1
	},
	description: {
		flex: 0.4
	},
	half: {
		marginTop: (height / 3)
	}
});
