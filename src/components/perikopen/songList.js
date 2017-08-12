import React, { Component}  from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

import HorizontalSongList from './_HorizontalSongList';
import FlexDirection from 'styles/flexDirection';

class SongList extends Component {
	render() {
		const songs = this.props.songs;
		const KJ = songs.KJ.map((t, i) => {
			return (
				<Text style={styles.song} key={i}>{ t }</Text>
			);
		});
		const BZ = songs.BZ.map((t, i) => {
			return (
				<Text style={styles.song} key={i}>{ t }</Text>
			);
		});
		return (
			<View style={[FlexDirection.column, styles.container]}>
				<HorizontalSongList listSongs={KJ} bookName="KJ" />
				<HorizontalSongList listSongs={BZ} bookName="BZ" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginBottom: 30
	},
	songListHorizontal: {
		marginLeft: 20
	},
	song: {
		marginRight: 10,
		textAlign: 'center'
	}
});

export default SongList;
