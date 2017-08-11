import { TabNavigator } from 'react-navigation';
import PerikopenScreen from 'screens/Home';
import AboutScreen from 'screens/About';

const BasicApp = TabNavigator({
	MainTab: {
    screen: PerikopenScreen,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Perikopen',
    }
  },
  About: {
    screen: AboutScreen,
    path: '/about',
    navigationOptions: {
      tabBarLabel: 'Help',
    }
  }
},{
  tabBarPosition: 'bottom'
});

export default BasicApp;
