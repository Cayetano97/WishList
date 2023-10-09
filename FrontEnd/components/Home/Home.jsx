import globalstyles from "../../Globalstyles";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gear from "../../assets/img/utils/Gear.png";

const Home = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();

  const handleSettings = () => {
    // navigation.navigate("Settings");
  };

  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <TouchableOpacity onPress={handleSettings}>
        <Image style={styles.gear} source={Gear} />
      </TouchableOpacity>
      <View style={styles.home}>
        {/* <Text style={globalstyles.text}>{username}</Text> */}
        {/* <Text style={globalstyles.text}>{name}</Text> */}
        <View>
          <Text style={styles.username}>Clara</Text>
          <Text style={styles.name}>@claram</Text>
          <Text style={styles.friends}>2 amigos</Text>
        </View>
        <View>
          <Text style={styles.username}>Icon</Text>
          <Text style={styles.username}>{id}</Text>
        </View>
      </View>
      <View style={styles.wishlist}>
        <Text style={styles.text}>Lista de deseos</Text>
        <View style={globalstyles.card}>
          <View>
            <Text style={globalstyles.text}>8 Items</Text>
            <Text style={globalstyles.text}>Completar</Text>
          </View>
          <Text style={globalstyles.text}>Actualizado el 28/09/23</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = {
  home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  gear: {
    width: 30,
    height: 30,
    marginLeft: "auto",
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

  wishlist: {
    marginTop: 25,
  },

  text: {
    fontSize: 22,
    fontFamily: "Inter_500Medium",
    marginBottom: 15,
  },
};
