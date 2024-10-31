import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";

const Button = ({ title, handlePress }) => {
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
    width: 337,
    height: 48,
    backgroundColor: "#1877F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },

  textColor: {
    color: "#FFFFFF",
  },
});

export default Button;
