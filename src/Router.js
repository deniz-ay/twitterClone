import 'react-native-gesture-handler';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';


import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Screen/Home/Home';
import HomeDetail from './Screen/Home/HomeDetail';

import Messages from './Screen/Messages/Messages';
import MessagesDetail from './Screen/Messages/MessagesDetail';

import Notifications from './Screen/Notifications/Noticifations';
import NoticifatiosDetail from './Screen/Notifications/NoticifatiosDetail';

import Search from './Screen/Search/Search';
import SearchDetalil from './Screen/Search/SearchDetail';

import firstPage from './Screen/Auth/firstPage';
import loginPage from './Screen/Auth/loginPage';
import registerPage from './Screen/Auth/registerPage';
import {navigationRef} from './RootNavigation';
import {Icon} from 'native-base';

const menu = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={{
        marginLeft: 10,
      }}>
      <Icon name="user" type="FontAwesome" />
    </TouchableOpacity>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
      <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
    </HomeStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
      <SearchStack.Screen name="SearchDetail" component={SearchDetalil} />
    </SearchStack.Navigator>
  );
};

const NotificationsStack = createStackNavigator();
const NotificationStackScreen = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="Search"
        component={Search}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
      <NotificationsStack.Screen
        name="SearchDetail"
        component={SearchDetalil}
      />
    </NotificationsStack.Navigator>
  );
};

const MessagesStack = createStackNavigator();
const MessagesStackScreen = () => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="Messages"
        component={Messages}
        options={({navigation, route}) => ({
          headerLeft: () => menu(navigation),
        })}
      />
      <MessagesStack.Screen name="MessagesDetail" component={MessagesDetail} />
    </MessagesStack.Navigator>
  );
};

const AuthStack = createStackNavigator();

const TabStack = createBottomTabNavigator();
const TabStackScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={HomeStackScreens} />
      <TabStack.Screen name="Search" component={SearchStackScreen} />
      <TabStack.Screen
        name="Notifications"
        component={NotificationStackScreen}
      />
      <TabStack.Screen name="Messages" component={MessagesStackScreen} />
    </TabStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function Router(props) {
  const [initialScreen, setInitialScreen] = React.useState(false);


  return (

      <NavigationContainer ref={navigationRef}>
        { props.user ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Drawer" component={TabStackScreen} />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="First Page"
              component={firstPage}
              options={{
                headerShown: false,
              }}
            />
            <AuthStack.Screen
              name="Login"
              component={loginPage}
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
            <AuthStack.Screen
              name="Register"
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
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    
  );
}
const mapStateToProps = ({ authResponse }) => {
  const { list,user } = authResponse;
  return { list,user };
};
export default connect(mapStateToProps, {})(Router);
