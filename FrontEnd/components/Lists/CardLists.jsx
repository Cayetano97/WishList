import globalstyles from "../../Globalstyles";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

import Share from "../../assets/img/utils/Share.png";
import Calendar from "../../assets/img/utils/Calendar.png";
import ShareWith from "../../assets/img/utils/ShareWith.png";

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
          <View key={list._id} style={[globalstyles.card, styles.general]}>
            <View style={styles.cardHeader}>
              <View style={globalstyles.listsIcons}>
                <Image
                  style={globalstyles.listsImage}
                  source={stuffIcons[list.icon]}
                />
              </View>
              <View>
                <Text style={[globalstyles.listName, styles.wrap]}>
                  {list.list_name}
                </Text>
                <View style={globalstyles.flexRow}>
                  <Text style={globalstyles.lighterText}>
                    {list.list_items.length}
                    {list.list_items.length === 1 ? " Item · " : " Items · "}
                  </Text>
                  <Text style={globalstyles.lighterText}>
                    {list.person_associated}
                  </Text>
                </View>
              </View>
              <Image style={styles.shareImage} source={Share} />
            </View>
            <View>
              <View style={globalstyles.flexRow}>
                <Image style={styles.icon} source={Calendar} />
                <Text style={[globalstyles.lighterText, styles.bodyWrap]}>
                  {list.createdAt === list.updatedAt
                    ? "Creado el " +
                      new Date(list.createdAt).toLocaleString().slice(0, 10)
                    : "Actualizado el " +
                      new Date(list.updatedAt).toLocaleString().slice(0, 10)}
                </Text>
              </View>
              <View style={[globalstyles.flexRow, styles.sharedText]}>
                <Image style={styles.icon} source={ShareWith} />
                <Text style={[globalstyles.lighterText, styles.bodyWrap]}>
                  {list.shared.length === 0
                    ? "Sin compartir"
                    : "Compartida con " +
                      (list.shared.length === 1
                        ? list.shared[0]
                        : list.shared[0] +
                          " y " +
                          (list.shared.length - 1) +
                          (list.shared.length - 1 === 1
                            ? " persona más"
                            : " personas más"))}
                </Text>
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
  general: {
    padding: 15,
  },

  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
  },

  wrap: {
    width: 200,
    flexWrap: "wrap",
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  shareImage: {
    width: 50,
    height: 50,
    marginTop: -25,
    marginLeft: "auto",
    marginRight: -10,
  },

  icon: {
    width: 50,
    height: 50,
    marginLeft: -14,
    marginRight: -5,
  },

  bodyWrap: {
    width: 290,
    flexWrap: "wrap",
    lineHeight: 25,
  },

  sharedText: {
    marginTop: -15,
  },
});
