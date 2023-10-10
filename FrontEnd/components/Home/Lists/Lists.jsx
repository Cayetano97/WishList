import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import globalstyles from "../../../Globalstyles";

const Lists = (props) => {
  return (
    <View style={styles.lists}>
      <View style={globalstyles.homeHeader}>
        <Text style={globalstyles.homeText}>Listas</Text>
        <Text style={globalstyles.seeAllText}>Ver todas</Text>
      </View>
      <Text>{props.data.list_name}</Text>
      {/* {props.data.data.length === 0 ? (
        <Text>Aún no tienes ninguna lista. ¡Crea una!</Text>
      ) : (
        <Text style={globalstyles.card}>{props.data.list_name}</Text>
      )} */}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({});
