import globalstyles from "../../Globalstyles";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gear from "../../assets/img/utils/Gear.png";
import { getUserInfo } from "../../fetch/UserFetch";
import { getLists } from "../../fetch/ListsFetch";
import Profile from "./Profile";
import Wishlist from "./Wishlist/Wishlist";
import Lists from "./Lists/Lists";
import Collections from "./Collections/Collections";

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
  const [iconImage, setIconImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = route.params;
  const navigation = useNavigation();

  const animalImages = {
    Jellyfish: Jellyfish,
    Sheep: Sheep,
    Deer: Deer,
    Whale: Whale,
    Cat: Cat,
    Bird: Bird,
    Mouse: Mouse,
    Crab: Crab,
    Butterfly: Butterfly,
    Pig: Pig,
    Fox: Fox,
    Bear: Bear,
    User: User,
  };

  // Handle functions

  const handleSettings = () => {
    // navigation.navigate("Settings");
  };

  // UseEffects

  useEffect(() => {
    const Info = async () => {
      await getUserInfo(id, setData, setIsLoading, setError);
      await getLists(id, setData, setIsLoading, setError);
    };
    Info();

    if (data !== null && data.icon !== null) {
      setIconImage(animalImages[data.icon]);
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
          <Profile data={data} iconImage={iconImage} />
          <Wishlist data={data} />
          <Lists />
          <Collections />
        </ScrollView>
      )}
      {error && alert("Error al cargar home. ¡Inténtalo de nuevo!")}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  gear: {
    width: 30,
    height: 30,
    marginLeft: "auto",
  },
});
