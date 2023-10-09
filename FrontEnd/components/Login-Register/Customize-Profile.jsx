import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Bear from "../../assets/img/animals/Bear.png";
import Bird from "../../assets/img/animals/Bird.png";
import Butterfly from "../../assets/img/animals/Butterfly.png";
import Cat from "../../assets/img/animals/Cat.png";
import Crab from "../../assets/img/animals/Crab.png";
import Deer from "../../assets/img/animals/Deer.png";
import Fox from "../../assets/img/animals/Fox.png";
import Jellyfish from "../../assets/img/animals/Jellyfish.png";
import Mouse from "../../assets/img/animals/Mouse.png";
import Pig from "../../assets/img/animals/Pig.png";
import Sheep from "../../assets/img/animals/Sheep.png";
import Whale from "../../assets/img/animals/Whale.png";

import globalstyles from "../../Globalstyles";
import globals from "../../Global";

const CustomizeProfile = ({ route }) => {
  const [image, setImage] = useState(Jellyfish);
  const [imageName, setImageName] = useState("Jellyfish");
  const [name, setName] = useState("Usuario");
  const [username, setUsername] = useState("@usuario");
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const { email } = route.params;

  const animalIcons = [
    { name: "Jellyfish", image: Jellyfish },
    { name: "Sheep", image: Sheep },
    { name: "Deer", image: Deer },
    { name: "Whale", image: Whale },
    { name: "Cat", image: Cat },
    { name: "Bird", image: Bird },
    { name: "Mouse", image: Mouse },
    { name: "Crab", image: Crab },
    { name: "Butterfly", image: Butterfly },
    { name: "Pig", image: Pig },
    { name: "Fox", image: Fox },
    { name: "Bear", image: Bear },
  ];

  //Fetch functions

  const user = async () => {
    try {
      const response = await fetch(`${globals.IP}/userinfo/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setName(data.data.name);
        setUsername(data.data.username);
        setId(data.data._id);
      } else {
        console.log("Error al obtener información del usuario");
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  //Patch para cambiar el icono de usuario

  const handleIcon = async (textButton) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${globals.IP}/update/${email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          icon: textButton === "Crear perfil" ? imageName : "User",
        }),
      });
      if (response.ok) {
        navigation.navigate("Home", { id: id });
      } else {
        alert("Error al cambiar el icono");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const handleCreateProfile = async () => {
    handleIcon("Crear perfil");
  };

  const handleSkip = async () => {
    handleIcon("omitir");
  };

  //UseEffect
  useEffect(() => {
    user();
  }, []);

  return (
    <View style={globalstyles.main}>
      <Text style={styles.text}>Personaliza tu perfil</Text>
      <View style={styles.profile}>
        <View style={styles.imageBackground} />
        <Image source={image} style={[globalstyles.image, styles.image]} />
        <View style={styles.username}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.unsernameText}>{username}</Text>
        </View>
      </View>
      <View style={[globalstyles.card, styles.icons]}>
        <Text style={styles.textIcon}>Elige un icono</Text>
        <View style={styles.animalIcons}>
          {animalIcons.map((animal) => {
            return (
              <TouchableOpacity
                key={animal.name}
                style={styles.animalCards}
                onPress={() => {
                  setImage(animal.image), setImageName(animal.name);
                }}
              >
                <View style={styles.animalBorder} />
                <Image source={animal.image} style={styles.animalImages} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        style={[globalstyles.button, globalstyles.purpleMainButton]}
        onPress={handleCreateProfile}
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
        onPress={handleSkip}
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
    marginTop: 40,
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
    height: 310,
    marginTop: 15,
    marginBottom: 20,
  },

  textIcon: {
    fontFamily: "Inter_400Regular",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },

  animalIcons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  animalCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
  },

  animalBorder: {
    borderRadius: 500,
    borderColor: "#000",
    borderWidth: 2,
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },

  animalImages: {
    width: 70,
    height: 70,
    zIndex: 1,
    position: "absolute",
  },
});
