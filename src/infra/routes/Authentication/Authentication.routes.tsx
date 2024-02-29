import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@screens/Authentication/SignIn';

const Stack = createNativeStackNavigator();

const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SignIn' component={SignInScreen} />
      {/* <Stack.Screen name='SignUp' component={() => <></>} /> */}
    </Stack.Navigator>
  );
};

export default AuthenticationRoutes;
