import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/containers/pages/Splash';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  const [state, setState] = useState({
    splash: true
  })

  if(state.splash){
    setTimeout(()=>setState({
      splash: false
    }), 3000)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={ state.splash ? Splash : HomeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
