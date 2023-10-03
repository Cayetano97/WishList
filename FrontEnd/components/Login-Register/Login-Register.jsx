import { View, Text, StyleSheet, TextInput } from "react-native";

const LoginRegister = () => {
  return (
    <View style={styles.mainLoginRegister}>
      <View>
        <Text style={styles.title}>WishList</Text>
      </View>
      <View style={styles.loginregister}>
        <Text style={styles.login}>Iniciar sesión</Text>
        <Text style={styles.register}>Registrarse</Text>
      </View>
      <View></View>
    </View>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  mainLoginRegister: {
    height: "100%",
    width: "100%",
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
});
