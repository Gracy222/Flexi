import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Skip = () => {
  return (
    <View style={styles.skipBg}>
      <Text style={styles.skipText}> Skip </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skipBg: {
    backgroundColor: "#DFEEFF",
    width: 56,
    height: 29,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    color: "#1877F9",
    fontWeight: "bold",
  },
});

export default Skip;
