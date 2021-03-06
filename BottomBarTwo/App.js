import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'native-base';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from './src/Home';
import Settings from './src/Settings';
import Product1 from './src/Product1';
import Product2 from './src/Product2';
import Detail from './src/Detail';
import Contact from './src/Contact';
import Getinfo from './src/Getinfo';
import Entry from './src/Entry';
import AuthLoader from './src/AuthLoader';
import ModalScreen from './src/ModalScreen';
import Logout from './src/Logout'



class App extends Component {
  render() {
    return (
      <SwitchNavigator />
    );
  }
}

const ProductStackOne = createStackNavigator({

  Product1: {
    screen: Product1, navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    }
  },
  Settings: {
    screen: Settings, 
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
       
      };
    }
  },

})

const ProductStackTwo = createStackNavigator({

  Product2: {
    screen: Product2, navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    }
  },
  Home: {
    screen: Home, navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    }
  },
  Detail: {
    screen: Detail, navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    }
  }

})



const BottomTab = createBottomTabNavigator({

  Product1: { screen: ProductStackOne },
  Product2: { screen: ProductStackTwo }

}, {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName
      }
    }
  })

const Stack = createStackNavigator({

  BottomTab: { screen: BottomTab },

}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name='ios-menu'
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )

      };
    }

  })

const Stack1 = createStackNavigator({
  Contact: { screen: Contact },
  Getinfo: { screen: Getinfo, navigationOptions: { headerLeft: false } },
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="ios-menu"
            size={30}
          />
        )
      };
    }
  })

const Drawer = createDrawerNavigator({
  Home: { screen: Stack },
  Contact: { screen: Stack1 },
  Logout: { screen: Logout }
})

const AuthStack = createStackNavigator({
  Entry: { screen: Entry },
  ModalScreen: { screen: ModalScreen }
},
  { mode: 'modal', headerMode: 'none' }
);

const SwitchNavigator = createSwitchNavigator({

  AuthLoader: { screen: AuthLoader },
  Homescreen: { screen: Drawer },
  AuthScreen: { screen: AuthStack }

}, {
    initialRouteName: 'AuthLoader',
  })

export default createAppContainer(SwitchNavigator);





