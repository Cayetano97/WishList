import { View, Text, StyleSheet } from "react-native";
import globalstyles from "../../../Globalstyles";

const Collections = (props) => {
  return (
    <View style={styles.lists}>
      <View style={globalstyles.homeHeader}>
        <Text style={globalstyles.homeText}>Collecciones</Text>
        <Text style={globalstyles.seeAllText}>Ver todas</Text>
      </View>
      <View style={globalstyles.card}></View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({});
