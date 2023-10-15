import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import IconLists from "./assets/img/navbar/Lists.png";
import IconCollections from "./assets/img/navbar/Collections.png";
import IconHome from "./assets/img/navbar/Home.png";
import IconStats from "./assets/img/navbar/Stats.png";
import IconFriends from "./assets/img/navbar/Friends.png";

import LoginRegister from "./components/Login-Register/Login-Register";
import CustomizeProfile from "./components/Login-Register/Customize-Profile";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import AccountPrivacy from "./components/Settings/Account-Privacy";
import Test from "./components/Navbar/Test";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F7F7F7" },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#A9A9A9",
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: { height: 55 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Listas"
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ borderTopWidth: focused ? 2 : 0, borderColor: "black" }}
            >
              <Image
                source={IconLists}
                style={{
                  width: 60,
                  height: "100%",
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Colecciones"
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderColor: focused ? "black" : "transparent",
              }}
            >
              <Image
                source={IconCollections}
                style={{
                  width: 60,
                  height: "100%",
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderColor: focused ? "black" : "transparent",
              }}
            >
              <Image
                source={IconHome}
                style={{
                  width: 60,
                  height: "100%",
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Estadísticas"
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderColor: focused ? "black" : "transparent",
              }}
            >
              <Image
                source={IconStats}
                style={{
                  width: 60,
                  height: "100%",
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Amigos"
        component={Test}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderColor: focused ? "black" : "transparent",
              }}
            >
              <Image
                source={IconFriends}
                style={{
                  width: 60,
                  height: "100%",
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
        }}
      />
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
        name="Settings"
        component={Settings}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="settings-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 18 }}>Ajustes</Text>
            </View>
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="AccountPrivacy"
        component={AccountPrivacy}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18 }}>Cuenta y Privacidad</Text>
          ),
          headerShown: true,
        }}
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
