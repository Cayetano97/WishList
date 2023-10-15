import globalstyles from "../../Globalstyles";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useRef, useState, useEffect } from "react";

import Baby from "../../assets/img/stuffs/Baby.png";
import Ball from "../../assets/img/stuffs/Ball.png";
import Cake from "../../assets/img/stuffs/Cake.png";
import Dummy from "../../assets/img/stuffs/Dummy.png";
import Family from "../../assets/img/stuffs/Family.png";
import Friend from "../../assets/img/stuffs/Friend.png";
import Gift from "../../assets/img/stuffs/Gift.png";
import Grass from "../../assets/img/stuffs/Grass.png";
import Heart from "../../assets/img/stuffs/Heart.png";
import Plant from "../../assets/img/stuffs/Plant.png";
import Retirement from "../../assets/img/stuffs/Retirement.png";
import Ring from "../../assets/img/stuffs/Ring.png";
import Sock from "../../assets/img/stuffs/Sock.png";
import Stroller from "../../assets/img/stuffs/Stroller.png";
import Tree from "../../assets/img/stuffs/Tree.png";
import User from "../../assets/img/animals/User.png";

const NewList = () => {
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const [image, setImage] = useState(Baby);
  const [imageName, setImageName] = useState("Baby");

  const stuffIcons = [
    { name: "Baby", image: Baby },
    { name: "Ball", image: Ball },
    { name: "Cake", image: Cake },
    { name: "Dummy", image: Dummy },
    { name: "Family", image: Family },
    { name: "Friend", image: Friend },
    { name: "Gift", image: Gift },
    { name: "Grass", image: Grass },
    { name: "Heart", image: Heart },
    { name: "Plant", image: Plant },
    { name: "Retirement", image: Retirement },
    { name: "Ring", image: Ring },
    { name: "Sock", image: Sock },
    { name: "Stroller", image: Stroller },
    { name: "Tree", image: Tree },
    { name: "User", image: User },
  ];

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[globalstyles.mainScreen, globalstyles.flexColumn]}
    >
      <View style={[globalstyles.listsIcons, styles.icon]}>
        <Image style={styles.image} source={image} />
      </View>
      <TextInput
        ref={inputRef}
        focusable={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          globalstyles.input,
          globalstyles.card,
          globalstyles.textInput,
          focus && globalstyles.inputFocus,
        ]}
        placeholder={"Nombre de la lista"}
      />
      <View style={[globalstyles.card, globalstyles.cardIcons]}>
        <Text style={styles.textIcon}>Elige un icono</Text>
        <View style={styles.stuffIcons}>
          {stuffIcons.map((stuff) => {
            return (
              <Pressable
                key={stuff.name}
                style={styles.stuffCards}
                onPress={() => {
                  setImage(stuff.image), setImageName(stuff.name);
                }}
              >
                <View style={styles.stuffBorder} />
                <Image source={stuff.image} style={styles.stuffImages} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default NewList;

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
  },

  //   stuffIcons: {
  //     height: 310,
  //     marginTop: 15,
  //     marginBottom: 20,
  //   },

  textIcon: {
    fontFamily: "Inter_400Regular",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },

  stuffIcons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  animalIcons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  stuffCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
  },

  stuffBorder: {
    borderRadius: 500,
    borderColor: "#000",
    borderWidth: 2,
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },

  stuffImages: {
    width: 70,
    height: 70,
    zIndex: 2,
    position: "absolute",
  },
});
