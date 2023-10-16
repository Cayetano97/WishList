import globalstyles from "../../Globalstyles";
import { View, Text, Image, Pressable } from "react-native";
import { useState } from "react";

const Icons = (props) => {
  const [pressedIcons, setPressedIcons] = useState(false);

  const handlePress = (icon) => {
    props.setImage(icon.image);
    props.setImageName(icon.name);
    setPressedIcons({ [icon.name]: true });
  };

  return (
    <View style={[globalstyles.card, props.cardIcons]}>
      <Text style={globalstyles.textChooseIcon}>Elige un icono</Text>
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
