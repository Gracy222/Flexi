import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import Button from "../components/Button";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <Image
            style={styles.imageSize}
            source={require("../assets/images/logo.png")}
          />
          <Text style={styles.title}>FlexiCare</Text>
        </View>
        <Button
          title="Continue"
          handlePress={() => router.push("/onboarding/screen1")}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  title: {
    fontSize: 32,
    fontWeight: "semibold",
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },

  imageSize: {
    width: 82,
    height: 40,
    resizeMode: "contain",
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
