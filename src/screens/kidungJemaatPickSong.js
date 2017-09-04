import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
	  View
} from 'react-native';

class KidungJemaatPickSong extends Component {
  back() {
    console.log(this.props.navigation);
  }
	render() {
		return (
			<View style={styles.container}>
        <View style={styles.row}>
          <Text>131A</Text>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={() => this.back()}>
            <Text style={styles.number}>1</Text>
          </TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.number}>2</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>3</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>A</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.number}>4</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>5</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>6</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>B</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.number}>7</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>8</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>9</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>C</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.number}></Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>0</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.number}>{ null }</Text>
          </View>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('KJ')}>
            <Text style={styles.number}>OK</Text>
          </TouchableHighlight>
        </View>

      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:1
  },
  button: {
    flex: 0.25,
    borderRightWidth:1,
		justifyContent:'center',
    alignItems: 'center'
  },
  number: {
    color: 'black',
    fontSize: 25
  }
});

export default KidungJemaatPickSong;
