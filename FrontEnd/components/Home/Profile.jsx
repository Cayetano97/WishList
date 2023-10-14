import { View, Text, Image, StyleSheet } from "react-native";

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

const Profile = (props) => {
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

  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={globalstyles.spinner}
        />
      ) : (
        <View style={styles.home}>
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.name}>{props.data.name}</Text>
              <Text style={styles.username}>{props.data.username}</Text>
            </View>
            <View style={styles.icon}>
              <View style={styles.imageBackground}>
                <Image
                  style={styles.image}
                  source={animalImages[props.data.icon]}
                />
              </View>
            </View>
          </View>
          <Text style={styles.friends}>
            {props.data.friends.length}{" "}
            {props.data.friends.length === 1 ? "amigo" : "amigos"}
          </Text>
        </View>
      )}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  home: {
    marginTop: -10,
    display: "flex",
    flexDirection: "column",
  },

  userInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "flex-start", //No funciona porqué el padre es un row, lo que significa que
  },

  name: {
    fontSize: 35,
    fontFamily: "Inter_500Medium",
  },

  username: {
    fontSize: 15,
    color: "#636262",
  },

  friends: {
    flexWrap: "wrap", // Wrap text if too long
    alignSelf: "flex-start", // Align text to left
    fontSize: 18,
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },

  icon: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: 40,
  },

  imageBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#E9DAF2",
    width: 85,
    height: 85,
  },

  image: {
    width: 110,
    height: 110,
  },
});
