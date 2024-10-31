import Button from "../../components/Button";
import { router } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Screen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <Image
            style={styles.image}
            source={require("../../assets/images/people-head.png")}
          />
          <View style={styles.textDiv}>
            <Text style={styles.title}>
              Welcome to FlexiCare!
              <Image
                style={styles.wave}
                source={require("../../assets/images/wave.png")}
              />
            </Text>
          </View>

          <Text style={styles.ptext}>
            Schedule your eye health today, wherever you are!
          </Text>
        </View>
        <Button
          title="Continue"
          handlePress={() => router.push("/onboarding/screen2")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textDiv: {
    width: 183,
    display: "flex",
    flexDirection: "row",
  },
  ptext: {
    width: 225,
    textAlign: "center",
    fontSize: 14,
  },
  container: {
    flex: 1,
  },

  section: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#1877F9",
    textAlign: "center",
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 300,
    resizeMode: "contain",
    marginBottom: 70,
  },
  wave: {
    width: 24,
    height: 32,
    resizeMode: "contain",
  },
});

export default Screen1;
