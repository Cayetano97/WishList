import globalstyles from "../../Globalstyles";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import DownArrow from "../../assets/img/utils/DownArrow.png";

const Icons = (props) => {
  const [pressedIcons, setPressedIcons] = useState(false);

  const handlePress = (icon) => {
    props.setImage(icon.image);
    props.setImageName(icon.name);
    setPressedIcons({ [icon.name]: true });
  };

  return (
    <View style={[globalstyles.card, props.cardIcons]}>
      {/* <View style={styles.flexArrow}> */}
      <Text style={globalstyles.textChooseIcon}>Elige un icono</Text>
      {/* <Image style={[styles.arrow]} source={DownArrow} /> */}
      {/* </View> */}
      <View style={globalstyles.mainIcons}>
        {props.iconArray.map((icon) => {
          const isPressed = pressedIcons[icon.name];

          return (
            <Pressable
              key={icon.name}
              onPress={() => {
                handlePress(icon);
              }}
              onBlur={() => setPressedIcons({ [icon.name]: false })}
            >
              <View
                style={[
                  globalstyles.borderImage,
                  isPressed && props.pressableImage,
                ]}
              >
                <Image source={icon.image} style={globalstyles.mainImages} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Icons;

// const styles = StyleSheet.create({
//   flexArrow: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   arrow: {
//     width: 60,
//     height: 60,
//     marginRight: -15,
//   },
// });
