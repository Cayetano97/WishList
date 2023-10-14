import globalstyles from "../../Globalstyles";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

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

const CardLists = (props) => {
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
  return (
    <>
      {props.data.map((list) => {
        return (
          <View key={list._id} style={globalstyles.card}>
            <View style={styles.cardHeader}>
              <View style={globalstyles.listsIcons}>
                <Image
                  style={globalstyles.listsImage}
                  source={stuffIcons[list.icon]}
                />
              </View>
              <View>
                <Text style={globalstyles.listName}>{list.list_name}</Text>
                <View>
                  <Text style={globalstyles.lighterGrayText}>
                    {list.list_items.length}
                    {list.list_items.length === 1 ? " Item · " : " Items · "}
                  </Text>
                  <Text style={globalstyles.lighterGrayText}>
                    {list.person_associated}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default CardLists;

const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
