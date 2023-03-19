import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SplashScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  PostAuthHomeScreen,
  VaultCodeScreen,
  ReceiptScreen,
  ReceiptInfoScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PostAuthHome"
            component={PostAuthHomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VaultCode"
            component={VaultCodeScreen}
            options={{
              title: 'VaultCode',
              headerTransparent: true,
              headerTintColor: '#000000',
            }}
          />
          <Stack.Screen
            name="Receipt"
            component={ReceiptScreen}
            options={{
              title: 'Receipts',
              headerTransparent: true,
              headerTintColor: '#000000',
            }}
          />
          <Stack.Screen
            name="Receipt-Info"
            component={ReceiptInfoScreen}
            options={{
              title: 'Receipt Information',
              headerTransparent: true,
              headerTintColor: '#000000',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
