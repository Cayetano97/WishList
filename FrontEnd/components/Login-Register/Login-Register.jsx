import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import BirdIcon from "../../assets/img/animals/BirdMain.png";
import OpenEye from "../../assets/img/utils/OpenEyePassword.png";
import CloseEye from "../../assets/img/utils/ClosedEyePassword.png";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import globalstyles from "../../Globalstyles";
import globals from "../../Global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginRegister = () => {
  const [isSelected, setSelection] = useState(false);
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [eye, setEye] = useState(true);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (isSelected) {
      setEmail(JSON.parse(await AsyncStorage.getItem("data_response")).email);
      setPassword(
        JSON.parse(await AsyncStorage.getItem("data_response")).password
      );
    }
    if (email !== "" && password !== "") {
      try {
        const response = await fetch(`${globals.IP}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          navigation.navigate("Navbar", {
            screen: "Home",
            params: { _id: data.data._id },
          });
          "Home", { _id: data.data._id };
          if (isSelected) {
            await AsyncStorage.setItem(
              "data_response",
              JSON.stringify(data.data)
            );
          }
        } else {
          alert("Inicio de sesión incorrecto");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Rellene todos los campos");
    }
  };

  const handleRegister = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
    if (email !== "" && password !== "" && name !== "" && username !== "") {
      if (isValidEmail) {
        if (isValidPassword) {
          if (password === password2) {
            try {
              const response = await fetch(`${globals.IP}/register`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  name: name,
                  username: username,
                  password: password,
                }),
              });
              if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigation.navigate("CustomizeProfile", {
                  id: data.data._id,
                });
              } else {
                alert("Registro incorrecto");
              }
            } catch (error) {
              console.log(error);
            }
          } else {
            alert("Las contraseñas no coinciden");
          }
        } else {
          alert("La contraseña no es válida");
        }
      } else {
        alert("Correo electrónico no válido");
      }
    } else {
      alert("Rellene todos los campos");
    }
  };

  const handleChange = (text, field) => {
    switch (field) {
      case "email":
        setEmail(text);
        break;
      case "password":
        setPassword(text);
        break;
      case "password2":
        setPassword2(text);
        break;
      case "name":
        setName(text.charAt(0).toUpperCase() + text.slice(1));
        break;
      case "username":
        if (text.startsWith("@")) {
          setUsername(text);
        } else if (text === "") {
          setUsername("");
        } else {
          setUsername("@" + text);
        }
        break;
    }
  };

  const handleEye = () => {
    setEye(!eye);
  };

  const handleChangeLog = () => {
    setLogin(true);
    setEmail("");
    setPassword("");
    setPassword2("");
    setName("");
    setUsername("");
    setEye(true);
  };
  const handleChangeReg = () => {
    setLogin(false);
    setEmail("");
    setPassword("");
    setPassword2("");
    setName("");
    setUsername("");
    setEye(true);
  };

  return (
    <ScrollView contentContainerStyle={{ marginBottom: 50 }}>
      <KeyboardAvoidingView
        behavior="position"
        style={styles.mainLoginRegister}
      >
        <View style={styles.container}>
          <Image source={BirdIcon} style={styles.image} />
          <View>
            <Text style={styles.title}>WishList</Text>
          </View>
          <View style={styles.loginregister}>
            <Pressable onPress={handleChangeLog}>
              <Text style={login ? styles.selected : styles.noselected}>
                Iniciar sesión
              </Text>
            </Pressable>
            <Pressable onPress={handleChangeReg}>
              <Text style={login ? styles.noselected : styles.selected}>
                Registrarse
              </Text>
            </Pressable>
          </View>
          {login ? (
            <View style={styles.input}>
              <View style={styles.containerinputs}>
                <TextInput
                  style={[
                    globalstyles.card,
                    globalstyles.input,
                    globalstyles.textInput,
                  ]}
                  value={email}
                  onChangeText={(text) => handleChange(text, "email")}
                  placeholder="Email o nombre de usuario"
                  inputMode="email"
                />
                <TextInput
                  style={[
                    globalstyles.card,
                    globalstyles.input,
                    globalstyles.textInput,
                  ]}
                  value={password}
                  onChangeText={(text) => handleChange(text, "password")}
                  placeholder="Contraseña"
                  secureTextEntry={eye ? true : false}
                />
              </View>
              <Pressable onPress={handleEye}>
                <Image
                  source={eye ? OpenEye : CloseEye}
                  style={styles.image2}
                />
              </Pressable>
              <View style={styles.checkbox}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.boxcheckbox}
                />
                <Text>Recordar sesión</Text>
              </View>
              <View style={styles.boton}>
                <Pressable
                  onPress={handleSubmit}
                  style={[globalstyles.button, globalstyles.purpleMainButton]}
                >
                  <Text
                    style={[
                      globalstyles.placeholderButton,
                      globalstyles.placeholderMainButton,
                    ]}
                  >
                    Inicio sesión
                  </Text>
                </Pressable>
                <View style={styles.noaccount}>
                  <Text>¿Aún no tienes cuenta?</Text>
                  <Pressable onPress={handleChangeReg}>
                    <Text style={styles.botontoreg}>Regístrate</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.input}>
              <TextInput
                style={[
                  globalstyles.card,
                  globalstyles.input,
                  globalstyles.textInput,
                ]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => handleChange(text, "email")}
                inputMode="email"
              />
              <TextInput
                style={[
                  globalstyles.card,
                  globalstyles.input,
                  globalstyles.textInput,
                ]}
                placeholder="Nombre"
                value={name}
                onChangeText={(text) => handleChange(text, "name")}
              />
              <TextInput
                style={[
                  globalstyles.card,
                  globalstyles.input,
                  globalstyles.textInput,
                ]}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={(text) => handleChange(text, "username")}
              />
              <TextInput
                style={[
                  globalstyles.card,
                  globalstyles.input,
                  globalstyles.textInput,
                ]}
                placeholder="Contraseña"
                value={password}
                onChangeText={(text) => handleChange(text, "password")}
                secureTextEntry={eye ? true : false}
              />
              <Pressable onPress={handleEye}>
                <Image
                  source={eye ? OpenEye : CloseEye}
                  style={styles.image3}
                />
              </Pressable>
              <TextInput
                style={[
                  globalstyles.card,
                  globalstyles.input,
                  globalstyles.textInput,
                ]}
                placeholder="Repetir contraseña"
                value={password2}
                onChangeText={(text) => handleChange(text, "password2")}
                secureTextEntry={eye ? true : false}
              />
              <Pressable onPress={handleEye}>
                <Image
                  source={eye ? OpenEye : CloseEye}
                  style={styles.image3}
                />
              </Pressable>
              <View style={styles.boton}>
                <Pressable
                  onPress={handleRegister}
                  style={[globalstyles.button, globalstyles.purpleMainButton]}
                >
                  <Text
                    style={[
                      globalstyles.placeholderButton,
                      globalstyles.placeholderMainButton,
                    ]}
                  >
                    Regístrate
                  </Text>
                </Pressable>
              </View>
              <View style={styles.noaccount}>
                <Text>¿Ya registrado?</Text>
                <Pressable onPress={handleChangeLog}>
                  <Text style={styles.botontoreg}>Inicia sesión</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  mainLoginRegister: {
    backgroundColor: "#F7F7F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    marginTop: 20,
    height: 175,
    width: 275,
  },
  image2: {
    height: 60,
    width: 50,
    position: "absolute",
    right: 5,
    bottom: 22.5,
    zIndex: 1,
  },
  image3: {
    height: 60,
    width: 50,
    position: "absolute",
    right: 5,
    bottom: 3,
    zIndex: 1,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
  },
  loginregister: {
    display: "flex",
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  input: {
    width: "90%",
    marginTop: 30,
  },
  containerinputs: {
    marginBottom: 20,
  },
  selected: {
    fontSize: 20,
    borderBottomWidth: 1,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  noselected: {
    fontSize: 20,
    color: "grey",
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  boxcheckbox: {
    marginRight: 10,
  },
  noaccount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  botontoreg: {
    color: "#8A3EB9",
    marginLeft: 5,
  },
});
