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
const LoginRegister = () => {
  const [isSelected, setSelection] = useState(false);
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheck = async () => {
    try {
      const response = await fetch("/check");
      const data = await response.json();
      if (response.status === 200) {
        alert("Check BBDD");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (email !== "" && password !== "") {
      try {
        console.log("try");
        const response = await fetch("http://localhost:8081/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            // username: username !== "" ? username : undefined,
          }),
        });
        const data = await response.json();
        if (response.status === 200) {
          alert("Inicio de sesión correcto");
        } else {
          alert("Inicio de sesión incorrecto");
        }
      } catch (error) {
        console.log(error);
        // alert("Inicio de sesión incorrecto");
      }
    } else {
      alert("Rellene todos los campos");
    }
  };

  const handleChange = (text, field) => {
    if (field === "email") {
      setEmail(text);
    } else if (field === "password") {
      setPassword(text);
    }
  };

  const handleChangeLog = () => {
    setLogin(true);
  };
  const handleChangeReg = () => {
    setLogin(false);
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
              style={styles.inputtext}
              value={email}
              onChangeText={(text) => handleChange(text, "email")}
              placeholder="Email o nombre de usuario"
            />
            <TextInput
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
            <TouchableOpacity onPress={handleSubmit}>
              <Text>Inicio sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCheck}>
              <Text>Check BBDD</Text>
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
          <TextInput placeholder="Email" />
          <TextInput placeholder="Nombre" />
          <TextInput placeholder="Nombre de usuario" />
          <TextInput placeholder="Contraseña" />
          <TextInput placeholder="Repetir contraseña" />
          <View style={styles.boton}>
            <TouchableOpacity>
              <Text>Regístrate</Text>
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
  inputtext: {
    height: 40,
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boton: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
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
