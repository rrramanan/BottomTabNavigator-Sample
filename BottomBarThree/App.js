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
        headerTitle:'Tab1'
      };
    }
  },
  Settings: {
    screen: Settings, 
    navigationOptions: ({ navigation }) => {
      return {
       headerLeft:false
      };
    }
  },

},{
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

const ProductStackTwo = createStackNavigator({

  Product2: {
    screen: Product2, navigationOptions: ({ navigation }) => {
      return {
        headerTitle:'Tab2'
      };
    }
  },
  Home: {
    screen: Home, navigationOptions: ({ navigation }) => {
      return {
        headerLeft:false
      };
    }
  },
  Detail: {
    screen: Detail, navigationOptions: ({ navigation }) => {
      return {
       headerLeft:false
      };
    }
  }

},{
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



const BottomTab = createBottomTabNavigator({

  Product1: { screen: ProductStackOne,navigationOptions: {
    tabBarIcon: ({ tintColor }) => <Icon name="pizza" size={35} color={tintColor} />,
    }, 
  },
  Product2: { screen: ProductStackTwo,navigationOptions: {
    tabBarIcon: ({ tintColor }) => <Icon name="star-half" size={35} color={tintColor} />,
    }, 
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
  Home: { screen: BottomTab },
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
