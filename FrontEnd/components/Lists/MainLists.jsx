import globalstyles from "../../Globalstyles";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
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
  const [sortData, setSortData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userInfo = async () => {
    const data = await AsyncStorage.getItem("data_response");
    const dataJson = JSON.parse(data);
    const _id = dataJson._id;
    setIdUser(_id);
  };

  //Handle functions

  const handleSort = () => {
    const sorted = data.sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt);
      const dateB = new Date(b.updatedAt || b.createdAt);
      return sortData ? dateB - dateA : dateA - dateB;
    });
    setData([...sorted]); //Creamos nueva copia del array ordenado
    setSortData(!sortData); //Cambiamos el estado de sortData
  };

  // UseEffects
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
            <Text style={globalstyles.sectionNameScreen}>
              Listas ({data.length})
            </Text>
            <Pressable onPress={handleSort}>
              <View style={[globalstyles.card, styles.short]}>
                <Text style={styles.shortText}>Ordenar por fecha</Text>
                <Image style={styles.arrows} source={Arrows} />
              </View>
            </Pressable>
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
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#828282",
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

  short: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#000",
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
