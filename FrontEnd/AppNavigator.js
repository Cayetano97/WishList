import {createStackNavigator} from '@react-navigation/stack';
import LoginRegister from "./components/Login-Register/Login-Register";
import CustomizeProfile from "./components/Login-Register/Customize-Profile";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginRegister} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={CustomizeProfile} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};

export default AppNavigator;