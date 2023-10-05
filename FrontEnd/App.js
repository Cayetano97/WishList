import { StatusBar } from "expo-status-bar";
import globalstyles from "./Globalstyles";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import { useState, useEffect } from "react";

// import LoginRegister from "./components/Login-Register/Login-Register";

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
    <>
    {/* <View style={styles.container}> */}
      {/* <LoginRegister /> */}
    {/* </View> */}
      <StatusBar style="auto" />
      
      <View style={styles.container}>
        <TextInput style={globalstyles.input} placeholder="Nombre de usuario" />
        <TextInput style={globalstyles.input} placeholder="Contraseña" />
        {/* <Button title= "Inicia sesión" color="#8A3EB9" marginTop={30} /> */}
        <TouchableOpacity style={[globalstyles.button, globalstyles.purpleButton]}>
          <Text style={globalstyles.placeholderButton}>Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[globalstyles.button, globalstyles.deleteButton]}>
          <Text style={[globalstyles.placeholderButton, globalstyles.placeholderDeleteButton]}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
});
