import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Home from './Screen/Home/Home'
import HomeDetail from './Screen/Home/HomeDetail'

import Messages from './Screen/Messages/Messages'
import MessagesDetail from './Screen/Messages/MessagesDetail'

import Notifications from './Screen/Notifications/Noticifations'
import NoticifatiosDetail from './Screen/Notifications/NoticifatiosDetail'

import Search from './Screen/Search/Search'
import SearchDetalil from './Screen/Search/SearchDetail'

import firstPage from './Screen/Auth/firstPage';
import loginPage from './Screen/Auth/loginPage';
import registerPage from './Screen/Auth/registerPage';
import {navigationRef} from './RootNavigation';

const HomeStack=createStackNavigator();
const HomeStackScreens = () => {
  return(
<HomeStack.Navigator>   
<HomeStack.Screen name='Home' component={Home} />
<HomeStack.Screen name ='HomeDetail'  component={HomeDetail} />
</HomeStack.Navigator>
);
}

const SearchStack=createStackNavigator();
const SearchStackScreen = () => {
  return(
<SearchStack.Navigator>   
<SearchStack.Screen name='Search' component={Search} />
<SearchStack.Screen name ='SearchDetail'  component={SearchDetalil} />
</SearchStack.Navigator>
);
}

const NotificationsStack=createStackNavigator();
const NotificationStackScreen = () => {
  return(
<NotificationsStack.Navigator>   
<NotificationsStack.Screen name='Search' component={Search} />
<NotificationsStack.Screen name ='SearchDetail'  component={SearchDetalil} />
</NotificationsStack.Navigator>
);
}


const MessagesStack=createStackNavigator();
const MessagesStackScreen = () => {
  return(
<MessagesStack.Navigator>   
<MessagesStack.Screen name='Messages' component={Messages} />
<MessagesStack.Screen name ='MessagesDetail'  component={MessagesDetail} />
</MessagesStack.Navigator>
);
}


const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();



function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen 
        name="First Page" 
        component={firstPage}
        options={{
          headerShown:false
           
        }} />
        <AuthStack.Screen name="Login" component={loginPage}
                options={{
                  title: 'Login',
                  headerStyle: {
                    backgroundColor: '#5EAADE',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
         />
        <AuthStack.Screen name="Register"
         component={registerPage}
         options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#5EAADE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         />
      </AuthStack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Notifications" component={NotificationStackScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
