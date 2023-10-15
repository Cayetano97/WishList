import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import { useState } from "react";
import globalstyles from "../../Globalstyles";
import ToggleOn from "../../assets/img/utils/ToggleOn.png";
import ToggleOff from "../../assets/img/utils/ToggleOff.png";
import Trash from "../../assets/img/utils/Trash.png";
import Alert from "../../assets/img/utils/Alert.png";
import CloseX from "../../assets/img/utils/Close-X.png";

import globals from "../../Global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const [toggle, setToggle] = useState(true);
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handlePrivacy = () => {
    navigation.navigate("AccountPrivacy");
  };

  const handleDeleteAccount = async () => {
    const data = await AsyncStorage.getItem("data_response");
    const dataJson = JSON.parse(data);
    try {
      const response = await fetch(`${globals.IP}/deleteuser/${dataJson._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Cuenta eliminada");
        await AsyncStorage.removeItem("data_response");
        await AsyncStorage.removeItem("credentials");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseSesion = async () => {
    await AsyncStorage.removeItem("data_response");
    await AsyncStorage.removeItem("credentials");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={modal ? styles.mainSettingsOff : styles.mainSettings}>
      <View style={globalstyles.card}>
        <View style={styles.theme}>
          <View>
            <Text style={globalstyles.listName}>Cambiar tema</Text>
            <Text style={globalstyles.lighterGrayText}>
              Cambia al modo oscuro
            </Text>
          </View>
          <Pressable onPress={handleToggle}>
            <Image
              source={toggle ? ToggleOn : ToggleOff}
              style={styles.image}
            />
          </Pressable>
        </View>
      </View>
      <Pressable onPress={handlePrivacy}>
        <View style={globalstyles.card}>
          <Text style={globalstyles.listName}>Cuenta y privacidad</Text>
          <Text style={globalstyles.lighterGrayText}>
            Personaliza tu perfil y gestiona tus ajustes de privacidad
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={handleCloseSesion}>
        <View style={[globalstyles.card, { backgroundColor: "grey" }]}>
          <Text style={{ color: "white", fontSize: 16 }}>Cerrar sesión</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleOpenModal}>
        <View style={styles.deleteaccount}>
          <Image source={Trash} style={styles.image} />
          <Text style={styles.deleteText}>Elimina tu cuenta</Text>
        </View>
      </Pressable>
      <Modal visible={modal} animationType="slide">
        <View style={styles.modal}>
          <Pressable onPress={handleCloseModal}>
            <Image source={CloseX} style={styles.CloseX} />
          </Pressable>
          <Image
            source={Alert}
            style={{ width: 300, height: 300, marginTop: -100 }}
          />
          <Text style={styles.textalert}>¿Estás seguro?</Text>
          <Text style={styles.textalert}>Esta acción no se puede deshacer</Text>
          <Pressable
            onPress={handleDeleteAccount}
            style={styles.deleteaccountbuton}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
              }}
            >
              - Borrar cuenta -
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainSettings: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginTop: "5%",
  },
  mainSettingsOff: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginTop: "5%",
    opacity: 0.4,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  theme: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteaccount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6262",
    width: 350,
    borderRadius: 8,
    shadowColor: "#cecece",
  },
  deleteText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    fontSize: 16,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  CloseX: {
    position: "absolute",
    top: -285,
    left: 125,
    width: 100,
    height: 100,
  },
  textalert: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    color: "#FF6262",
    marginBottom: 10,
  },
  deleteaccountbuton: {
    backgroundColor: "#FF6262",
    width: 350,
    borderRadius: 8,
    shadowColor: "#cecece",
    padding: 10,
    marginTop: 10,
  },
});
