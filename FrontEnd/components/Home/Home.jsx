import globalstyles from "../../Globalstyles";
import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gear from "../../assets/img/utils/Gear.png";
import { getUserInfo } from "../../utils/fetch";

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
import User from "../../assets/img/animals/User.png";

const Home = ({ route }) => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [iconName, setIconName] = useState("");
  const [iconImage, setIconImage] = useState(null);
  const [friends, setFriends] = useState(0);
  const [products, setProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email } = route.params;
  const navigation = useNavigation();

  const animalIcons = () => {
    switch (iconName) {
      case "Jellyfish":
        setIconImage(Jellyfish);
        break;
      case "Sheep":
        setIconImage(Sheep);
        break;
      case "Deer":
        setIconImage(Deer);
        break;
      case "Whale":
        setIconImage(Whale);
        break;
      case "Cat":
        setIconImage(Cat);
        break;
      case "Bird":
        setIconImage(Bird);
        break;
      case "Mouse":
        setIconImage(Mouse);
        break;
      case "Crab":
        setIconImage(Crab);
        break;
      case "Butterfly":
        setIconImage(Butterfly);
        break;
      case "Pig":
        setIconImage(Pig);
        break;
      case "Fox":
        setIconImage(Fox);
        break;
      case "Bear":
        setIconImage(Bear);
        break;
      case "User":
        setIconImage(User);
        break;
      default:
        setIconImage(User);
        break;
    }
  };

  // Handle functions

  const handleSettings = () => {
    // navigation.navigate("Settings");
  };

  // UseEffects

  useEffect(() => {
    getUserInfo(email, setData, setIsLoading, setError);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (data !== null) {
      console.log(data);
      setName(data.name);
      setUsername(data.username);
      setFriends(data.friends.length);
      setIconName(data.icon);
      animalIcons();
      setProducts(data.wishlist.length);
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
      ) : (
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Pressable onPress={handleSettings}>
            <Image style={styles.gear} source={Gear} />
          </Pressable>
          <View style={styles.home}>
            <View>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.friends}>
                {friends} {friends === 1 ? "amigo" : "amigos"}
              </Text>
            </View>
            <View styles={styles.icon}>
              <View style={styles.imageBackground} />
              <Image style={styles.image} source={iconImage} />
            </View>
          </View>
          <View style={styles.wishlist}>
            <Text style={styles.text}>Lista de deseos</Text>
            <View style={globalstyles.card}>
              <View style={styles.items}>
                <Text style={styles.products}>
                  {products} {products === 1 ? "Item" : "Items"}
                </Text>
                <Text style={styles.complete}>Completar</Text>
              </View>
              <Text style={globalstyles.lighterGrayText}>
                Actualizado el 28/09/23
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
      {error && alert("Error al cargar home. ¡Inténtalo de nuevo!")}
    </>
  );
};

export default Home;

const styles = {
  gear: {
    width: 30,
    height: 30,
    marginLeft: "auto",
  },

  home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  username: {
    fontSize: 35,
    fontFamily: "Inter_500Medium",
  },

  name: {
    fontSize: 15,
    color: "#636262",
  },

  friends: {
    fontSize: 18,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  imageBackground: {
    borderRadius: 500,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#E9DAF2",
    width: 90,
    height: 90,
  },

  image: {
    width: 120,
    height: 120,
    zIndex: 1,
    position: "absolute",
    top: -15,
    left: -15,
  },

  wishlist: {
    marginTop: 25,
  },

  text: {
    fontSize: 22,
    fontFamily: "Inter_500Medium",
    marginBottom: 15,
  },

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  products: {
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },

  complete: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    color: "#8A3EB9",
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#E9DAF280",
    borderRadius: 50,
  },
};
