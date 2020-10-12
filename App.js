import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: "#7eeffa",
            image: <Image source={require("./assets/onboarding-1.png")} />,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#7eeffa",
            image: <Image source={require("./assets/onboarding-2.png")} />,
            title: "One Click",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#7eeffa",
            image: <Image source={require("./assets/onboarding-3.png")} />,
            title: "Ask The Expert",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
