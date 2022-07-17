import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './screens/Home';

const theme = extendTheme({});

const Stack = createNativeStackNavigator<{
  Home: undefined;
}>();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;
