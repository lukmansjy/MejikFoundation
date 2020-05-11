import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/containers/pages/Splash';
import Welcome from './src/containers/pages/Welcome';
import Register from './src/containers/pages/Register';
import Login from './src/containers/pages/Login';
import Donation from './src/containers/pages/Donation';
import Transfer from './src/containers/pages/Transfer';

const Stack = createStackNavigator();

const App = () => {
  const [state, setState] = useState({
    splash: true
  })

  if(state.splash){
    setTimeout(()=>setState({
      splash: false
    }), 2000)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>

        <Stack.Screen name="Home" component={ state.splash ? Splash : Welcome } />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Donation" component={Donation}/>
        <Stack.Screen name="Transfer" component={Transfer}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
