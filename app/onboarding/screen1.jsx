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
          <View>
            <Text>
              Welcome to FlexiCare!{" "}
              <Image
                style={styles.wave}
                source={require("../../assets/images/wave.png")}
              />
            </Text>
          </View>

          <Text>Schedule your eye health today, wherever you are!</Text>
        </View>
        <Button
          title="Continue"
          handlePress={() => router.push("/onboarding/screen1")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 360,
    resizeMode: "contain",
  },
  wave: {
    width: 24,
    height: 32,
    resizeMode: "contain",
  },
});

export default Screen1;
