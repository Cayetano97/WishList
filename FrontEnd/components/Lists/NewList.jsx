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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icons from "../Icons/Icons";
import { createList } from "../../fetch/ListsFetch";

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
  const [focusName, setFocusName] = useState(false);
  const [focusAssociate, setFocusAssociate] = useState(false);
  const [focusCollection, setFocusCollection] = useState(false);
  const [image, setImage] = useState(Baby);
  const [imageName, setImageName] = useState("Baby");
  const [idUser, setIdUser] = useState(null);

  const userInfo = async () => {
    const data = await AsyncStorage.getItem("data_response");
    const dataJson = JSON.parse(data);
    const _id = dataJson._id;
    setIdUser(_id);
  };

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

  const handleCreateList = async () => {
    //Completar
    await createList(
      id_user,
      list_name,
      icon,
      name_collection,
      person_associated,
      setIsLoading,
      setError
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={[
          globalstyles.mainScreen,
          globalstyles.flexColumn,
        ]}
      >
        <View style={[globalstyles.listsIcons, styles.icon]}>
          <Image style={styles.image} source={image} />
        </View>
        <TextInput
          editable={true}
          autoFocus={true}
          onFocus={() => setFocusName(true)}
          onBlur={() => setFocusName(false)}
          style={[
            globalstyles.input,
            globalstyles.card,
            globalstyles.textInput,
            focusName && globalstyles.inputFocus,
          ]}
          placeholder={"Nombre de la lista"}
        />
        <TextInput
          editable={true}
          onFocus={() => setFocusAssociate(true)}
          onBlur={() => setFocusAssociate(false)}
          style={[
            globalstyles.input,
            globalstyles.card,
            globalstyles.textInput,
            focusAssociate && globalstyles.inputFocus,
          ]}
          placeholder={"Asociar lista a..."}
        />
        <TextInput
          editable={true}
          onFocus={() => setFocusCollection(true)}
          onBlur={() => setFocusCollection(false)}
          style={[
            globalstyles.input,
            globalstyles.card,
            globalstyles.textInput,
            focusCollection && globalstyles.inputFocus,
          ]}
          placeholder={"Añadir a una colección"}
        />
        <Icons
          iconArray={stuffIcons}
          cardIcons={globalstyles.cardIcons}
          setImage={setImage}
          setImageName={setImageName}
          pressableImage={styles.pressableImage}
        />
        <Pressable style={[globalstyles.button, globalstyles.grayButton]}>
          <Text style={globalstyles.placeholderButton}>Compartir con</Text>
        </Pressable>
        <Pressable
          style={[globalstyles.button, globalstyles.blackMainButton]}
          onPress={handleCreateList}
        >
          <Text
            style={[
              globalstyles.placeholderButton,
              globalstyles.placeholderMainButton,
            ]}
          >
            Crear lista
          </Text>
        </Pressable>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default NewList;

const styles = StyleSheet.create({
  icon: {
    width: 75,
    height: 75,
    marginTop: 10,
    marginBottom: 20,
  },

  image: {
    width: 90,
    height: 90,
  },

  widthInput: {
    width: "70%",
  },

  pressableImage: {
    backgroundColor: "#fbd99d",
    borderRadius: 500,
  },
});
