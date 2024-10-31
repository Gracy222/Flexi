import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Button from "../../../components/Button";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <Image source={require("../../../assets/images/logo.png")} />
          <Text style={styles.title}>FlexiCare</Text>
          <Text style={styles.inText}>Create a New Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email Address" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.options}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            <Text>Remember Me</Text>
          </View>
          <Button title="Sign Up" />
        </View>
        <View style={styles.signUpDiv}>
          <Text style={styles.optionsText}>or continue with</Text>
          <View style={styles.otherOptionsView}>
            <TouchableOpacity style={styles.otherOptions}>
              <Image
                source={require("../../../assets/images/facebook.png")}
                width={25}
                height={25}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOptions}>
              <Image
                source={require("../../../assets/images/google.png")}
                width={25}
                height={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signInDiv}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => router.push("../signin/signinScreen")}
          >
            <Text style={styles.signUpText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#1877F9",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
  },

  inputContainer: {
    width: "90%",
    paddingHorizontal: 16,
  },

  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  options: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  optionsText: {
    marginTop: 28,
    marginBottom: 20,
  },

  inputView: {
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
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  signInDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    color: "#1877F9",
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  otherOptionsView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    height: 60,
  },
  otherOptions: {
    width: 91,
    height: 48,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#F1F0F3",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignupScreen;
