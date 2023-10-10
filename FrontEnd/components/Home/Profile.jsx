import { View, Text, Image, StyleSheet } from "react-native";

const Profile = (props) => {
  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.username}>{props.data.username}</Text>
        <Text style={styles.name}>{props.data.name}</Text>
        <Text style={styles.friends}>
          {props.data.friends.length}{" "}
          {props.data.friends.length === 1 ? "amigo" : "amigos"}
        </Text>
      </View>
      <View styles={styles.icon}>
        <View style={styles.imageBackground} />
        <Image style={styles.image} source={props.iconImage} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
});
