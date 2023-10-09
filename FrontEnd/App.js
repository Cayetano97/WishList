import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
// import {SplashScreen} from "expo-splash-screen";
import AppLoading from "./AppLoading";

export default function App() {
  // SplashScreen.preventAutoHideAsync();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Inter_100Thin: require("./assets/fonts/Inter/static/Inter-Thin.ttf"),
        Inter_200ExtraLight: require("./assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
        Inter_300Light: require("./assets/fonts/Inter/static/Inter-Light.ttf"),
        Inter_400Regular: require("./assets/fonts/Inter/static/Inter-Regular.ttf"),
        Inter_500Medium: require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
        Inter_600SemiBold: require("./assets/fonts/Inter/static/Inter-SemiBold.ttf"),
        Inter_700Bold: require("./assets/fonts/Inter/static/Inter-Bold.ttf"),
        Inter_800ExtraBold: require("./assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
        Inter_900Black: require("./assets/fonts/Inter/static/Inter-Black.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  // if (!fontLoaded) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      {fontLoaded ? (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      ) : (
        <AppLoading />
      )}
    </>
  );
}
