import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationRoutes from './Authentication/Authentication.routes';
import AppRoutes from './App';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Authentication' component={AuthenticationRoutes} />
      <Stack.Screen name='App' component={AppRoutes} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
