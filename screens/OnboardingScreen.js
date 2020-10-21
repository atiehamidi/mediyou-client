import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: "#b5f1f7",
            image: <Image source={require("../assets/onboarding-1.png")} />,
            title: "All-IN-One",
            subtitle: "APP",
          },
          {
            backgroundColor: "#b5f1f7",
            image: <Image source={require("../assets/onboarding-2.png")} />,
            title: "One Click",
            subtitle: "Emergency Service",
          },
          {
            backgroundColor: "#b5f1f7",
            image: <Image source={require("../assets/onboarding-3.png")} />,
            title: "Ask The Expert",
            subtitle: "24/7",
          },
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default OnboardingScreen;
