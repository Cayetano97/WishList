import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalstyles from "../../../Globalstyles";

import Baby from "../../../assets/img/stuffs/Baby.png";
import Ball from "../../../assets/img/stuffs/Ball.png";
import Cake from "../../../assets/img/stuffs/Cake.png";
import Dummy from "../../../assets/img/stuffs/Dummy.png";
import Family from "../../../assets/img/stuffs/Family.png";
import Friend from "../../../assets/img/stuffs/Friend.png";
import Gift from "../../../assets/img/stuffs/Gift.png";
import Grass from "../../../assets/img/stuffs/Grass.png";
import Heart from "../../../assets/img/stuffs/Heart.png";
import Plant from "../../../assets/img/stuffs/Plant.png";
import Retirement from "../../../assets/img/stuffs/Retirement.png";
import Ring from "../../../assets/img/stuffs/Ring.png";
import Sock from "../../../assets/img/stuffs/Sock.png";
import Stroller from "../../../assets/img/stuffs/Stroller.png";
import Tree from "../../../assets/img/stuffs/Tree.png";

const Lists = (props) => {
  const navigation = useNavigation();

  const stuffIcons = {
    Baby: Baby,
    Ball: Ball,
    Cake: Cake,
    Dummy: Dummy,
    Family: Family,
    Friend: Friend,
    Gift: Gift,
    Grass: Grass,
    Heart: Heart,
    Plant: Plant,
    Retirement: Retirement,
    Ring: Ring,
    Sock: Sock,
    Stroller: Stroller,
    Tree: Tree,
  };

  const handleNavigate = () => {
    navigation.navigate("Navbar", {
      screen: "Listas",
    });
  };

  return (
    <View>
      <View style={globalstyles.homeHeader}>
        <Text style={globalstyles.homeText}>Listas</Text>
        <Text onPress={handleNavigate} style={globalstyles.seeAllText}>
          Ver todas
        </Text>
      </View>
      <View>
        {props.data === null ? (
          <Text
            style={[
              globalstyles.card,
              globalstyles.lighterGrayText,
              styles.noLists,
            ]}
          >
            Aún no tienes ninguna lista. ¡Crea una!
          </Text>
        ) : (
          props.data.map((list) => {
            return (
              <View style={[globalstyles.card, styles.lists]} key={list._id}>
                <View>
                  <View style={globalstyles.listsIcons}>
                    <Image
                      style={globalstyles.listsImage}
                      source={stuffIcons[list.icon]}
                    />
                  </View>
                </View>
                <View>
                  <Text style={globalstyles.listName}>{list.list_name}</Text>
                  <Text style={globalstyles.lighterGrayText}>
                    {list.list_items.length}{" "}
                    {list.list_items.length === 1 ? "Item" : "Items"}
                    {" · "}
                    {list.person_associated}
                  </Text>
                </View>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  noLists: {
    paddingVertical: 20,
  },

  lists: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
  },
});
