import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import firstPage from './Screen/firstPage'
import loginPage from './Screen/loginPage'
import registerPage from './Screen/registerPage'

const Stack=createStackNavigator()



function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="First Page" 
        component={firstPage}
        options={{
          headerShown:false
           
        }} />
        <Stack.Screen name="Login" component={loginPage}
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
        <Stack.Screen name="Register" component={registerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
