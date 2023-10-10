import { View, Text, StyleSheet } from "react-native";
import globalstyles from "../../../Globalstyles";

const Wishlist = (props) => {
  return (
    <View style={styles.wishlist}>
      <Text style={globalstyles.homeText}>Lista de deseos</Text>
      <View style={globalstyles.card}>
        <View style={styles.items}>
          <Text style={styles.products}>
            {props.data.wishlist.length}{" "}
            {props.data.wishlist.length === 1 ? "Item" : "Items"}
          </Text>
          <Text style={styles.complete}>Completar</Text>
        </View>
        <Text style={[globalstyles.lighterGrayText, styles.wishlistText]}>
          {" "}
          {props.data.wishlist.length === 0
            ? "¡Agrega productos a tu lista de deseos!"
            : `Actualizada el ${props.data.wishlist.updatedAt}`}
        </Text>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  wishlist: {
    marginTop: 25,
  },

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },

  products: {
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },

  complete: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    color: "#8A3EB9",
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#E9DAF280",
    borderRadius: 10,
  },

  wishlistText: {
    marginTop: 10,
  },
});
