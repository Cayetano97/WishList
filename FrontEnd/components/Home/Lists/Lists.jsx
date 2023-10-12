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
              <View style={globalstyles.card}>
                <Text>{list.list_name}</Text>
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
});
