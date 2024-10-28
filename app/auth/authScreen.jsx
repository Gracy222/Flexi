import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import CustomButton from "../../components/CustomButton";

const AuthScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={require("../../assets/images/authimage.png")} />
          <Text>Let’s you in</Text>
        </View>
        <View>
          <CustomButton title="Continue with Facebook" />
          <CustomButton title="Continue with Google" />
        </View>
        <View>
          <Text>Or</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
