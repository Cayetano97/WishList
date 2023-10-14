import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
import globalstyles from "../../Globalstyles";
import ToggleOn from "../../assets/img/utils/ToggleOn.png";
import ToggleOff from "../../assets/img/utils/ToggleOff.png";
import Trash from "../../assets/img/utils/Trash.png";
const Settings = () => {
  const [toggle, setToggle] = useState(true);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
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
        <View style={globalstyles.card}>
          <Text style={globalstyles.listName}>Cuenta y privacidad</Text>
          <Text style={globalstyles.lighterGrayText}>
            Personaliza tu perfil y gestiona tus ajustes de privacidad
          </Text>
        </View>
        <Pressable onPress={handleOpenModal}>
          <View style={styles.deleteaccount}>
            <Image source={Trash} style={styles.image} />
            <Text style={styles.deleteText}>Elimina tu cuenta</Text>
          </View>
        </Pressable>
        <Modal visible={modal} animationType="slide">
          <View style={styles.modal}>
            <Text>¿Estás seguro? Esta acción no se puede deshacer</Text>
            <Pressable onPress={handleCloseModal}>
              <Text>Cerrar ventana modal</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </>
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
});
