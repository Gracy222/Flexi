import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Button from "../../components/Button";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Image source={require("../../assets/images/authimage.png")} />
          <Text style={styles.inText}>Let’s you in</Text>
        </View>
        <View>
          <View style={styles.buttonView}>
            <Image
              source={require("../../assets/images/facebook.png")}
              width={25}
              height={25}
            />
            <Text style={styles.buttonViewText}>Continue with Facebook</Text>
          </View>
          <View style={styles.buttonView}>
            <Image
              source={require("../../assets/images/google.png")}
              width={25}
              height={25}
            />
            <Text style={styles.buttonViewText}>Continue with Google</Text>
          </View>
        </View>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Or</Text>
          <Button title="Sign in with password" />
        </View>
        <View style={styles.signUpDiv}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={router.push("../auth/signup/signup")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inText: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 30,
  },

  options: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },
  optionsText: {
    marginBottom: 40,
  },

  buttonView: {
    marginBottom: 30,
    width: 335,
    height: 52,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9EA",
    borderRadius: 7,
  },

  buttonViewText: {
    marginLeft: 15,
  },
  signUpDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 44,
  },
  signUpText: {
    color: "#1877F9",
    fontWeight: "bold",
  },
});

export default AuthScreen;
