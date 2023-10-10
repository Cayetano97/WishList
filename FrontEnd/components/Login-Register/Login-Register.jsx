import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import BirdIcon from "../../assets/img/animals/BirdMain.png";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import globalstyles from "../../Globalstyles";
import globals from "../../Global";
import { useNavigation } from "@react-navigation/native";

const LoginRegister = () => {
  const [isSelected, setSelection] = useState(false);
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
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
          // alert("Inicio de sesión correcto");
          navigation.navigate("CustomizeProfile", { email: email });
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
    console.log(globals.IP);
    if (email !== "" && password !== "" && name !== "" && username !== "") {
      if (password === password2) {
        try {
          console.log("try");
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
          console.log(email, name, username, password);
          if (response.ok) {
            await response.json();
            alert("Registro correcto");
          } else {
            console.log(response);
            alert("Registro incorrecto");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Las contraseñas no coinciden");
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
        setName(text);
        break;
      case "username":
        setUsername(text);
        break;
    }
  };

  const handleChangeLog = () => {
    setLogin(true);
    setEmail("");
    setPassword("");
    setPassword2("");
    setName("");
    setUsername("");
  };
  const handleChangeReg = () => {
    setLogin(false);
    setEmail("");
    setPassword("");
    setPassword2("");
    setName("");
    setUsername("");
  };

  return (
    <View style={styles.mainLoginRegister}>
      <Image source={BirdIcon} style={styles.image} />
      <View>
        <Text style={styles.title}>WishList</Text>
      </View>
      <View style={styles.loginregister}>
        <TouchableOpacity onPress={handleChangeLog}>
          <Text style={login ? styles.selected : styles.noselected}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChangeReg}>
          <Text style={login ? styles.noselected : styles.selected}>
            Registrarse
          </Text>
        </TouchableOpacity>
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
            />
          </View>
          <View style={styles.checkbox}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text>Recordar sesión</Text>
          </View>
          <View style={styles.boton}>
            <TouchableOpacity
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
            </TouchableOpacity>
            <View style={styles.noaccount}>
              <Text>¿Aún no tienes cuenta?</Text>
              <TouchableOpacity onPress={handleChangeReg}>
                <Text style={styles.botontoreg}>Regístrate</Text>
              </TouchableOpacity>
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
          />
          <TextInput
            style={[
              globalstyles.card,
              globalstyles.input,
              globalstyles.textInput,
            ]}
            placeholder="Repetir contraseña"
            value={password2}
            onChangeText={(text) => handleChange(text, "password2")}
          />
          <View style={styles.boton}>
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
          <View style={styles.noaccount}>
            <Text>¿Ya registrado?</Text>
            <TouchableOpacity onPress={handleChangeLog}>
              <Text style={styles.botontoreg}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  mainLoginRegister: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F7F7F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    marginTop: 50,
    height: 175,
    width: 275,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
  },
  loginregister: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
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
