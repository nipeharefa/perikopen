import { TabNavigator } from 'react-navigation';
import PerikopenScreen from 'screens/perikopen';
import AboutScreen from 'screens/about';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const BasicApp = TabNavigator({
	MainTab: {
		screen: PerikopenScreen,
		path: '/',
		navigationOptions: {
			tabBarLabel: 'Perikopen',
			tabBarIcon: () => <Icon name="calendar" style={{fontSize: 20}}/>
		}
	},
	About: {
		screen: AboutScreen,
		path: '/about',
		navigationOptions: {
			tabBarLabel: 'Info',
			tabBarIcon: () => <Icon name="info-circle" style={{fontSize: 20}}/>
		}
	}
},{
	tabBarPosition: 'bottom',
	lazy: true,
	tabBarOptions: {
		showIcon: true,
		labelStyle: {
			fontSize: 8,
			paddingBottom: 0
		}
	}
});

export default BasicApp;
