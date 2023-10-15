import globalstyles from "../../Globalstyles";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Plus from "../../assets/img/utils/Plus.png";
import Arrows from "../../assets/img/utils/Arrows.png";
import { getLists } from "../../fetch/ListsFetch";
import CardLists from "./CardLists";

const MainLists = () => {
  const [idUser, setIdUser] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userInfo = async () => {
    const data = await AsyncStorage.getItem("data_response");
    const dataJson = JSON.parse(data);
    const _id = dataJson._id;
    setIdUser(_id);
  };

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    if (idUser) {
      getLists(idUser, setData, setIsLoading, setError);
    }
  }, [idUser]);

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  return (
    <>
      <View>
        <Text style={globalstyles.textScreen}>Listas</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={globalstyles.spinner}
        />
      ) : error ? (
        alert("Error al cargar listas. ¡Inténtalo de nuevo!")
      ) : (
        <ScrollView style={globalstyles.mainScreen}>
          <View style={[globalstyles.card, styles.create]}>
            <Text style={styles.createText}>Crear lista</Text>
            <Image style={styles.plus} source={Plus} />
          </View>
          <View>
            <Text style={styles.lists}>Listas ({data.length})</Text>
            <View style={[globalstyles.card, styles.short]}>
              <Text style={styles.shortText}>Ordenar por fecha</Text>
              <Image style={styles.arrows} source={Arrows} />
            </View>
          </View>
          <CardLists data={data} />
        </ScrollView>
      )}
    </>
  );
};

export default MainLists;

const styles = StyleSheet.create({
  create: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    marginVertical: 5,
    backgroundColor: "#000",
  },

  createText: {
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    color: "#fff",
  },

  plus: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },

  lists: {
    fontSize: 22,
    fontFamily: "Inter_400Regular",
    color: "#000",
    paddingVertical: 8,
  },

  short: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    marginVertical: 5,
  },

  shortText: {
    fontSize: 17,
    fontFamily: "Inter_400Regular",
  },

  arrows: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },
});
