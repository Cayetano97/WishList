import globalstyles from "../../Globalstyles";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
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

import { getUserInfo, updateUserInfo } from "../../fetch/UserFetch";
import Icons from "../Icons/Icons";

const CustomizeProfile = ({ route }) => {
  const [image, setImage] = useState(Jellyfish);
  const [imageName, setImageName] = useState("Jellyfish");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorUpdate, setErrorUpdate] = useState(null);
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const { _id } = route.params;

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

  //Handle functions

  const handleUpdateUserInfo = async (textButton) => {
    updateUserInfo(textButton, _id, imageName, setIsLoading, setErrorUpdate);
    navigation.navigate("Navbar", {
      screen: "Home",
      params: { _id: _id },
    });
  };

  const handleCreate = () => {
    handleUpdateUserInfo("Crear perfil");
  };

  const handleSkip = async () => {
    handleUpdateUserInfo("Omitir");
  };

  //UseEffects

  useEffect(() => {
    const userInfo = async () => {
      await getUserInfo(_id, setData, setIsLoading, setError);
    };
    userInfo();
  }, [_id]);

  useEffect(() => {
    if (data !== null && data.name !== null && data.username !== null) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={globalstyles.spinner}
        />
      ) : error ? (
        alert("Algo no ha ido como debía. ¡Inténtalo de nuevo!")
      ) : (
        <View style={globalstyles.main}>
          <Text style={styles.text}>Personaliza tu perfil</Text>
          <View style={styles.profile}>
            <View style={styles.imageBackground} />
            <Image source={image} style={[globalstyles.image, styles.image]} />
            <View style={styles.username}>
              <Text style={styles.nameText}>{data.name}</Text>
              <Text style={styles.unsernameText}>{data.username}</Text>
            </View>
          </View>
          <Icons
            cardIcons={styles.icons}
            iconArray={animalIcons}
            setImage={setImage}
            setImageName={setImageName}
            pressableImage={styles.pressableImage}
          />
          <Pressable
            style={[globalstyles.button, globalstyles.purpleMainButton]}
            onPress={handleCreate}
          >
            <Text
              style={[
                globalstyles.placeholderButton,
                globalstyles.placeholderMainButton,
              ]}
            >
              Crear perfil
            </Text>
          </Pressable>
          <Pressable
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
          </Pressable>
        </View>
      )}
      {errorUpdate && alert("Algo no ha ido como debía. ¡Inténtalo de nuevo!")}
    </>
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

  pressableImage: {
    backgroundColor: "#E9DAF2",
    borderRadius: 500,
  },
});
