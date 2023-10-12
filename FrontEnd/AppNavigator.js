import { createStackNavigator } from "@react-navigation/stack";
import LoginRegister from "./components/Login-Register/Login-Register";
import CustomizeProfile from "./components/Login-Register/Customize-Profile";
import Home from "./components/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

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
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator>
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
