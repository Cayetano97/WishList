import { View, Text, StyleSheet, TextInput } from "react-native";
import BirdIcon from "../../assets/img/BirdMain.png";
import { useState } from "react";
import CheckBox from "expo-checkbox";
const LoginRegister = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.mainLoginRegister}>
      <View>
        <Text style={styles.title}>WishList</Text>
      </View>
      <View style={styles.loginregister}>
        <Text style={styles.login}>Iniciar sesión</Text>
        <Text style={styles.register}>Registrarse</Text>
      </View>
      <View>
        <TextInput placeholder="Email o nombre de usuario" />
        <TextInput placeholder="Contraseña" />
        <CheckBox value={isSelected} onValueChange={setSelection} />
      </View>
    </View>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  mainLoginRegister: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
  },
  loginregister: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  login: {
    fontSize: 20,
  },
  register: {
    fontSize: 20,
  },
});
