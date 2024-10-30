import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, Image } from "react-native";

const Button = ({ title, handlePress, Image }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text style={styles.textColor}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 335,
    height: 52,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9EA",
    borderRadius: 7,
  },

  textColor: {
    color: "black",
  },
});

export default Button;
