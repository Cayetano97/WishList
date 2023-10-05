import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Bear from "../../assets/img/Bear.png";
import Bird from "../../assets/img/Bird.png";
import Butterfly from "../../assets/img/Butterfly.png";
import Cat from "../../assets/img/Cat.png";
import Crab from "../../assets/img/Crab.png";
import Deer from "../../assets/img/Deer.png";
import Fox from "../../assets/img/Fox.png";
import Jellyfish from "../../assets/img/Jellyfish.png";
import Mouse from "../../assets/img/Mouse.png";
import Pig from "../../assets/img/Pig.png";
import Sheep from "../../assets/img/Sheep.png";
import User from "../../assets/img/User.png";
import Whale from "../../assets/img/Whale.png";

import { useState } from "react";
import globalstyles from "../../Globalstyles";

const CustomizeProfile = () => {
  const [image, setImage] = useState(User);
  const [name, setName] = useState("Usuario");
  const [username, setUsername] = useState("@usuario");

  return (
    <View style={globalstyles.main}>
      <Text style={styles.text}>Personaliza tu perfil</Text>
      <View style={styles.profile}>
        <View style={styles.imageBackground}></View>
        <Image source={User} style={[globalstyles.image, styles.image]} />
        <View style={styles.username}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.unsernameText}>{username}</Text>
        </View>
      </View>
      <View style={[globalstyles.card, styles.icons]}>
        <Text style={styles.textIcon}>Elige un icono</Text>
      </View>
      <TouchableOpacity
        style={[globalstyles.button, globalstyles.purpleMainButton]}
      >
        <Text
          style={[
            globalstyles.placeholderButton,
            globalstyles.placeholderMainButton,
          ]}
        >
          Crear perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalstyles.button, globalstyles.purpleButton]}
      >
        <Text
          style={[
            globalstyles.placeholderButton,
            globalstyles.placeholderButton,
          ]}
        >
          Omitir
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomizeProfile;

const styles = StyleSheet.create({
  text: {
    marginTop: 65,
    fontSize: 25,
    fontFamily: "Inter_600SemiBold",
  },

  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },

  imageBackground: {
    borderRadius: 500,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#E9DAF2",
    width: 130,
    height: 130,
  },

  image: {
    width: 180,
    height: 180,
    zIndex: 1,
    position: "absolute",
    top: -25,
  },

  username: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },

  nameText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 25,
  },

  unsernameText: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: "#636262",
  },

  icons: {
    height: 320,
    marginVertical: 15,
  },

  textIcon: {
    fontFamily: "Inter_400Regular",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
