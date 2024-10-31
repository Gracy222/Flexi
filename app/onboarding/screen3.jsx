import Button from "../../components/Button";
import Skip from "../../components/Skip";
import { router } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Screen3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.skipView}>
          <Skip />
        </View>
        <View style={styles.section}>
          <Image
            style={styles.image}
            source={require("../../assets/images/obimage2.png")}
          />
          <View style={styles.textDiv}>
            <Text style={styles.titleh2}>
              Schedule appointments with expert doctors
            </Text>
          </View>

          <Text style={styles.ptext}>
            Find experienced specialist doctors with expert ratings and reviews
            and book your appointment hassle-free.
          </Text>
        </View>
        <Button
          title="Next"
          handlePress={() => router.push("/onboarding/screen4")}
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
    alignItems: "center",
    justifyContent: "center",
  },
  ptext: {
    width: 308,
    height: 105,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },
  container: {
    flex: 1,
  },

  section: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  titleh2: {
    width: 273,

    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "black",
    textAlign: "center",
    lineHeight: 35,
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 305,
    resizeMode: "contain",
    marginBottom: 40,
  },
  wave: {
    width: 24,
    height: 32,
    resizeMode: "contain",
  },
  skipView: {
    width: "80%",
    display: "flex",
    alignItems: "flex-end",
  },
});

export default Screen3;
