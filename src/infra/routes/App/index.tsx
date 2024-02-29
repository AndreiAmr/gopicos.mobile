import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/App/Home';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
