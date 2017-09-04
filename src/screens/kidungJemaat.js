import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
	View
} from 'react-native';

class KidungJemaat extends Component {
	render() {
		return (
			<View style={styles.containerAbout}>
				<Text>Nipe Harefa</Text>
				<Button
					onPress={() => this.props.navigation.navigate('SelectKJ')}
					title="Go to Lucy's profile"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerAbout: {},
});



export default KidungJemaat;
