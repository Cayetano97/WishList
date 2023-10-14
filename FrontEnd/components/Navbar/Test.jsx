import { View, StyleSheet, Text } from "react-native";

const Test = () => {
  return (
    <View style={styles.mainnavbar}>
      <Text>Texto</Text>
      <Text>Texto</Text>
      <Text>Texto</Text>
      <Text>Texto</Text>
      <Text>Texto</Text>
      <Text>Texto</Text>
      <Text>Texto</Text>
    </View>
  );
};
export default Test;

const styles = StyleSheet.create({
  mainnavbar: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
