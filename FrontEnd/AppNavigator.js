import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginRegister from "./components/Login-Register/Login-Register";
import CustomizeProfile from "./components/Login-Register/Customize-Profile";
import Home from "./components/Home/Home";
import Test from "./components/Navbar/Test";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: "#F7F7F7" } }}
    >
      <Tab.Screen name="Listas" component={Test} />
      <Tab.Screen name="Colecciones" component={Test} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Estadísticas" component={Test} />
      <Tab.Screen name="Amigos" component={Test} />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomizeProfile"
        component={CustomizeProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Navbar"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
