import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@screens/Authentication/SignIn';
import SignUpScreen from '@screens/Authentication/SignUp';

const Stack = createNativeStackNavigator();

const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationRoutes;
