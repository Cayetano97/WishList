import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import globalstyles from "../../Globalstyles";
import { useState } from "react";

import EditIcon from "../../assets/img/utils/Edit.png";
import CloseX from "../../assets/img/utils/Close-X.png";

const AccountPrivacy = () => {
  const [modal, setModal] = useState(false);

  const handleChangeName = () => {
    console.log("cambio");
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <View style={styles.mainSettings}>
        <Pressable onPress={handleChangeName}>
          <View style={globalstyles.card}>
            <View style={styles.theme}>
              <View>
                <Text style={globalstyles.listName}>Nombre público</Text>
                <Text style={globalstyles.lighterGrayText}>
                  Cambia tu nombre público
                </Text>
              </View>
              <Image source={EditIcon} style={styles.image} />
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={globalstyles.card}>
            <View style={styles.theme}>
              <View>
                <Text style={globalstyles.listName}>Contraseña</Text>
                <Text style={globalstyles.lighterGrayText}>
                  Cambia tu contraseña
                </Text>
              </View>
              <Image source={EditIcon} style={styles.image} />
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={globalstyles.card}>
            <View style={styles.theme}>
              <View>
                <Text style={globalstyles.listName}>Color de perfil</Text>
                <Text style={globalstyles.lighterGrayText}>
                  Cambia el color de tu perfil
                </Text>
              </View>
              <Image source={EditIcon} style={styles.image} />
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={globalstyles.card}>
            <View style={styles.theme}>
              <View>
                <Text style={globalstyles.listName}>Icono</Text>
                <Text style={globalstyles.lighterGrayText}>
                  Cambia tu icono
                </Text>
              </View>
              <Image source={EditIcon} style={styles.image} />
            </View>
          </View>
        </Pressable>
      </View>
      <View style={modal ? styles.modal : { display: "none" }}>
        <View style={styles.mainModal}>
          <Pressable onPress={handleCloseModal}>
            <Image
              source={CloseX}
              style={[
                styles.image,
                { position: "absolute", top: -20, right: -180 },
              ]}
            />
          </Pressable>

          <Text style={[globalstyles.listName]}>Nombre público</Text>
          <Text style={globalstyles.viewBorder}>Clara</Text>
          <TextInput
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              width: "80%",
            }}
          ></TextInput>
          <TextInput
            style={globalstyles.viewBorder}
            placeholder="Introduce tu nuevo nombre"
          ></TextInput>
          <TextInput
            style={globalstyles.viewBorder}
            placeholder="Escribe de nuevo tu nombre"
          ></TextInput>
          <Pressable>
            <Text
              style={[
                globalstyles.button,
                globalstyles.purpleButton,
                globalstyles.placeholderButton,
                {
                  width: 315,
                  marginTop: 20,
                  fontSize: 18,
                },
              ]}
            >
              Guardar
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default AccountPrivacy;

const styles = StyleSheet.create({
  mainSettings: {
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginTop: "5%",
  },
  theme: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainModal: {
    backgroundColor: "#fff",
    width: "90%",
    height: "50%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
