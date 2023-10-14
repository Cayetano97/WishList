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

const Home = ({ route }) => {
  const [data, setData] = useState(null);
  const [dataLists, setDataLists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { _id } = route.params;
  const navigation = useNavigation();

  // Handle functions

  const handleSettings = () => {
    // navigation.navigate("Settings");
  };

  // UseEffects

  useEffect(() => {
    const fetchData = async () => {
      await getUserInfo(_id, setData, setIsLoading, setError);
      await getLists(_id, setDataLists, setIsLoading, setError);
    };
    fetchData();
  }, [_id]);

  useEffect(() => {
    if (
      data !== null &&
      data !== undefined &&
      dataLists !== null &&
      dataLists !== undefined
    ) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data, dataLists]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={globalstyles.spinner}
        />
      ) : error ? (
        alert("Error al cargar home. ¡Inténtalo de nuevo!")
      ) : (
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Pressable onPress={handleSettings}>
            <Image style={styles.gear} source={Gear} />
          </Pressable>
          <Profile data={data} isLoading={isLoading} />
          <Wishlist data={data} isLoading={isLoading} />
          <Lists data={dataLists} isLoading={isLoading} />
          <Collections />
        </ScrollView>
      )}
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
