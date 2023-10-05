import { StatusBar } from "expo-status-bar";
import globalstyles from "./Globalstyles";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';
import { useState, useEffect } from "react";
import LoginRegister from "./components/Login-Register/Login-Register";

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
  const loadFont = async () => {
    await Font.loadAsync({
      Inter_100Thin: require('./assets/fonts/Inter/static/Inter-Thin.ttf'),
      Inter_200ExtraLight: require('./assets/fonts/Inter/static/Inter-ExtraLight.ttf'),
      Inter_300Light: require('./assets/fonts/Inter/static/Inter-Light.ttf'),
      Inter_400Regular: require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
      Inter_500Medium: require('./assets/fonts/Inter/static/Inter-Medium.ttf'),
      Inter_600SemiBold: require('./assets/fonts/Inter/static/Inter-SemiBold.ttf'),
      Inter_700Bold: require('./assets/fonts/Inter/static/Inter-Bold.ttf'),
      Inter_800ExtraBold: require('./assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
      Inter_900Black: require('./assets/fonts/Inter/static/Inter-Black.ttf'),
    });
    setFontLoaded(true);
  };
  loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={styles.container}>
      <LoginRegister />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 